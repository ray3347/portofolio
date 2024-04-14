"use client";
import { Canvas, ThreeEvent, useFrame, useLoader } from "@react-three/fiber";
import {
  IControlProps,
  IControlRef,
  IModelProps,
  IPageProps,
  IProxyCurrentState,
} from "./interfaces";
import React, {
  Suspense,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  CameraControls,
  ContactShadows,
  GradientTexture,
  MeshReflectorMaterial,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
  TransformControls,
  useCursor,
  useGLTF,
} from "@react-three/drei";
import { approxEquals, objects } from "./constants";
import * as THREE from "three";
import { proxy, useSnapshot } from "valtio";
import BackButton from "../back-button";
import * as dotenv from "dotenv";
import { GetStaticProps } from "next";
import { useCanvasCamera, useMousePosition } from "@/utilities";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery, useTheme } from "@mui/material";
import Loading from "../loading";
import { RGBELoader } from "three-stdlib";
import {
  Bloom,
  BrightnessContrast,
  DepthOfField,
  EffectComposer,
  HueSaturation,
  LUT,
  SelectiveBloom,
  ToneMapping,
} from "@react-three/postprocessing";
import { GainMapLoader, HDRJPGLoader } from "@monogrid/gainmap-js";

gsap.registerPlugin(useGSAP);

const Canvas3D = forwardRef<IControlRef, IPageProps>((props, ref) => {
  // state

  //zustand
  const { x, y, z, look, isZoom, zoom, name } = useCanvasCamera();
  // other hooks
  const controlsRef: any = useRef();
  const router = useRouter();
  const pathname = usePathname();
  const [initPath, setInitPath] = useState("");
  const [currPath, setCurrPath] = useState("/");

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const Model = (modelProps: IModelProps) => {
    const { nodes }: any = useGLTF(`/route_objects.glb`);
    const texture = useLoader(RGBELoader, "/active_texture_mini.hdr");

    // const snap = useSnapshot(state);
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);
    const { hovCheck, showInfo } = useMousePosition();
    const [opa, setOpa] = useState(0);

    //gsap
    const modelRef: any = useRef();
    useFrame(() => {
      if (name === modelProps.name) modelRef.current.rotation.z += 0.01;
    });

    return (
      <>
        <mesh
          ref={modelRef}
          name={modelProps.name}
          position={modelProps.position}
          rotation={modelProps.rotation}
          scale={modelProps.scale}
          onClick={(e) => {
            if (pathname != modelProps.url.path) {
              e.stopPropagation();
              showInfo(null, null);
              hovCheck(false);
              if (modelProps.func) {
                modelProps.func(true);
              }
              router.push(`${modelProps.url.path}`);
            }
          }}
          onPointerOver={(e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            setHovered(true);
            hovCheck(true);
            showInfo(modelProps.url.title, modelProps.url.description);
          }}
          onPointerOut={(e) => {
            setHovered(false);
            hovCheck(false);
            showInfo(null, null);
          }}
          geometry={nodes[modelProps.name].geometry}
          castShadow={true}
          receiveShadow={true}
        >
          {/* <meshStandardMaterial
            roughness={0}
            metalness={0}
            color={
              name === modelProps.name || hovered ? modelProps.color : "white"
            }
            emissiveIntensity={0}
            emissive={"white"}
          /> */}
          {/* <MeshReflectorMaterial
            mirror={0.2}
            roughness={0}
            metalness={0}
            color={
              name === modelProps.name || hovered ? modelProps.color : "white"
            }
            emissiveIntensity={0}
            emissive={"white"}
          /> */}
          {/* <meshPhysicalMaterial
            roughness={0}
            metalness={0}
            color={
              name === modelProps.name || hovered ? modelProps.color : "white"
            }
            emissiveIntensity={0}
            emissive={"white"}
            envMapIntensity={0.9}
            clearcoat={1}
            transparent={false}
            // transmission={ .95}
            opacity={1}
            reflectivity={0.2}
            ior={0.9}
          /> */}
          {name === modelProps.name ? (
            <MeshRefractionMaterial
              color={
                name === modelProps.name || hovered ? modelProps.color : "white"
              }
              envMap={texture}
              bounces={2}
            />
          ) : (
            <meshStandardMaterial
              roughness={0}
              metalness={0}
              color={
                name === modelProps.name || hovered ? modelProps.color : "white"
              }
              emissiveIntensity={0}
              emissive={"white"}
            />
          )}
        </mesh>

        {name === modelProps.name && (
          <>
            {/* <pointLight
              position={[
                modelProps.position[0] + 5,
                modelProps.position[1],
                modelProps.position[2],
              ]}
              intensity={50}
            />
            <pointLight
              position={[
                modelProps.position[0],
                modelProps.position[1] + 5,
                modelProps.position[2],
              ]}
              intensity={50}
            />
            <pointLight
              position={[
                modelProps.position[0],
                modelProps.position[1],
                modelProps.position[2] + 5,
              ]}
              intensity={50}
            /> */}
            {/* <pointLight
              position={[
                modelProps.position[0],
                modelProps.position[1],
                modelProps.position[2] + 15,
                // modelProps.position[0] * 3,
                // modelProps.position[1] < 0 ? -10 : modelProps.position[1] * 3,
                // Math.abs(modelProps.position[2]) < 30
                //   ? modelProps.position[2] * 4
                //   : modelProps.position[2] * 2,
              ]}
              intensity={500}
            /> */}
            {/* <EffectComposer>
              <Bloom
                mipmapBlur
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                intensity={1}
                height={300}
                width={1000}
              />
              <ToneMapping mode={THREE.ACESFilmicToneMapping} />
            </EffectComposer> */}
          </>
        )}
      </>
    );
  };

  const Controls = forwardRef<IControlRef, IControlProps>(
    (controlProps, ref) => {
      const cameraControlsRef: any = useRef();
      const meshRef: any = useRef();
      const [cameraRotation, setCameraRotation] = useState<any>(0);

      const handleReset = () => {
        look(0, -10, 100, null);
        if (controlProps.func) {
          controlProps.func(false);
          // setIsZoom(false);
        }
      };

      useImperativeHandle(ref, () => ({
        func: () => {
          handleReset();
        },
      }));

      useEffect(() => {
        if (
          !approxEquals(x, 0) ||
          !approxEquals(y, -10) ||
          !approxEquals(z, 100)
        ) {
          cameraControlsRef.current?.setLookAt(
            x * 3,
            y < 0 ? -10 : y * 3,
            Math.abs(z) < 30 ? z * 4 : z * 2,
            x,
            y + 5,
            z,
            true
          );
          cameraControlsRef.current?.zoomTo(1.2, true);
        } else {
          if (initPath !== "") {
            cameraControlsRef.current?.setLookAt(x, y, z, 0, 0, 0, true);
            if (isMd) {
              cameraControlsRef.current?.zoomTo(0.5, true);
            } else {
              cameraControlsRef.current?.zoomTo(1, true);
            }
            cameraControlsRef.current.rotate(0, 0, true);
          }
        }
      }, [x || y || z]);

      useEffect(() => {
        if (currPath != pathname) {
          setInitPath(pathname);
          setCurrPath(pathname);
          if (pathname != "/") {
            const activeObject = objects.find((x) =>
              pathname.includes(x.url.path)
            );
            if (activeObject) {
              if (props.callback) {
                props.callback(true);
              }
              look(
                activeObject.position[0],
                activeObject.position[1],
                activeObject.position[2],
                activeObject.name
              );
            }
          } else {
            handleReset();
          }
        } else if (initPath === "") {
          setInitPath(pathname);
          setCurrPath(pathname);
          handleReset();
        }
      }, [pathname]);

      useFrame(() => {
        if (cameraControlsRef.current) {
          if (name === null) {
            if (meshRef.current) {
              setCameraRotation(cameraRotation + 0.0025);
              meshRef.current.rotation.y -= 0.0025;
            }
          }
        }
      });

      return (
        <>
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.75}
            minAzimuthAngle={0}
            maxAzimuthAngle={Math.PI / 1.75}
          />
          <CameraControls ref={cameraControlsRef} />

          <Suspense fallback={null}>
            <group position={[0, 0, 0]} ref={meshRef}>
              {objects
                .filter((x) => x.url)
                .map((obj: IModelProps) => (
                  <Model
                    key={obj.name}
                    name={obj.name}
                    color={obj.color}
                    position={obj.position}
                    rotation={obj.rotation}
                    scale={obj.scale}
                    url={obj.url}
                    func={(e) => {
                      if (e != null) {
                        if (controlProps.func) {
                          controlProps.func(e);
                          if (meshRef.current) {
                            cameraControlsRef.current.position = [
                              x,
                              meshRef.current.rotation.y,
                              z,
                            ];
                          }
                        }
                      }
                    }}
                  />
                ))}

              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -35, 0]}
                opacity={0.25}
                width={200}
                height={200}
                blur={1}
                far={50}
              />
            </group>
          </Suspense>
        </>
      );
    }
  );

  useImperativeHandle(ref, () => ({
    func: () => {
      controlsRef.current?.func();
    },
  }));

  // useEffect(()=>{
  //   const renderer = new THREE.WebGLRenderer();

  //   const loader = new GainMapLoader(renderer);

  //   const result = loader.loadAsync(['/active_texture_2.jpg', '/active_texture_2-gainmap.jpg', '/active_texture_2.json']).then((x)=>{
  //     console.log(x)
  //     let hdr = x.renderTarget.textures[0];
  //     hdr.mapping = THREE.EquirectangularReflectionMapping;
  //     hdr.needsUpdate = true;
  //     setActiveTexture(hdr);
  //   });
  // },[])

  return (
    <Suspense fallback={<Loading />}>
      <Canvas
        camera={{ position: [x, y, z], fov: 50 }}
        dpr={[1, 2]}
        style={{
          width: props.width ?? isMd ? "100vw" : "200vw",
          // display: "flex",
          zIndex: 0,
          height: props.height ?? "100vh",
        }}
      >
        <hemisphereLight
          color="#FF69B4"
          groundColor="black"
          position={[0, -0.8, 0]}
          intensity={0.5}
        />
        <directionalLight intensity={2} position={[0, 1, 0]} color={"cyan"} />
        <directionalLight
          intensity={2}
          position={[-1, 0, 1]}
          color={"#ff8a00"}
        />
        <Controls
          func={(e) => {
            if (e != null) {
              if (props.callback) {
                props.callback(e);
              }
            }
          }}
          ref={controlsRef}
        />
      </Canvas>
    </Suspense>
  );
});

export default Canvas3D;
