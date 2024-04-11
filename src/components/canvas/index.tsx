"use client";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
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

gsap.registerPlugin(useGSAP);

const Canvas3D = forwardRef<IControlRef, IPageProps>((props, ref) => {
  // state

  //zustand
  const { x, y, z, look, isZoom, zoom, name } = useCanvasCamera();

  // snapshot
  // const state = proxy<IProxyCurrentState>({
  //   current: null,
  //   position: [0, 0, 0],
  // });

  // other hooks
  const controlsRef: any = useRef();
  const router = useRouter();
  const pathname = usePathname();
  const [initPath, setInitPath] = useState("");
  const [currPath, setCurrPath] = useState("/");

  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const Model = (modelProps: IModelProps) => {
    // dev
    // const { nodes }: any = useGLTF(`${process.env.URL_DEV}/compressed.glb`);

    // prod
    const { nodes }: any = useGLTF(`/compressed.glb`);

    // const snap = useSnapshot(state);
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);
    const { hovCheck, showInfo } = useMousePosition();

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
              // look(
              //   modelProps.position[0],
              //   modelProps.position[1],
              //   modelProps.position[2],
              //   modelProps.name
              // );
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
            showInfo(modelProps.url.title, modelProps.url.description)
            // setActive(true);
            // show(modelProps.name, modelProps.url ?? "---", null);
            // if (title != modelProps.name) {
            //   show(modelProps.name, modelProps.url ?? "---", null);
            // }
          }}
          onPointerOut={(e) => {
            setHovered(false);
            hovCheck(false);
            showInfo(null, null)
            // setActive(false);
            // show(null, null, null);
            // if (title === modelProps.name) {
            //   console.log("BABI")
            //   show(null, null, null);
            // }
          }}
          geometry={nodes[modelProps.name].geometry}
          material={nodes[modelProps.name].material}
          material-color={
            name === modelProps.name || hovered ? modelProps.color : "white"
            // state.current === modelProps.name || hovered
            //   ? modelProps.color
            //   : "white"
          }
          castShadow={true}
          receiveShadow={true}
        >
          {/* <GradientTexture
            stops={[0, 0.8]} // As many stops as you want
            colors={[modelProps.color, '#e52e71']} // Colors need to match the number of stops
            size={100} // Size is optional, default = 1024
          /> */}
        </mesh>

        {name === modelProps.name && (
          <>
            {/* <OrbitControls autoRotate={true} /> */}
            <pointLight
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
            />
            <pointLight
              position={[
                modelProps.position[0] + 5,
                modelProps.position[1] + 5,
                modelProps.position[2] + 5,
              ]}
              intensity={50}
            />
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
      // const [isZoom, setIsZoom] = useState<boolean | undefined>(undefined);

      const handleReset = () => {
        look(0, -10, 80, null);
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
          !approxEquals(z, 80)
        ) {
          cameraControlsRef.current?.setLookAt(
            x * 3,
            y < 0 ? -10 : y * 3,
            z * 3,
            x,
            y + 5,
            z,
            true
          );
          cameraControlsRef.current?.zoomTo(1.2, true);

          // if (pathname != "/") {
          //   cameraControlsRef.current?.zoomTo(1.2, true);
          // } else {
          //   // cameraControlsRef.current?.zoomTo(3, true);
          // }
        } else {
          // cameraControlsRef.current?.rotateTo(0,0, true)
          if (initPath !== "") {
            cameraControlsRef.current?.setLookAt(x, y, z, 0, 0, 0, true);
            if (isMd) {
              cameraControlsRef.current?.zoomTo(0.5, true);
            } else {
              cameraControlsRef.current?.zoomTo(1, true);
            }
            cameraControlsRef.current.rotate(0, 0, true);
          }

          // setAutoRotateEnabled(true);
        }
      }, [x || y || z]);

      useEffect(() => {
        // console.log("BABI22", initPath, currPath, pathname);
        if (currPath != pathname) {
          // console.log("BABI23");
          setInitPath(pathname);
          setCurrPath(pathname);
          if (pathname != "/") {
            const activeObject = objects.find((x) => x.url.path === pathname);

            // console.log("BABAB", activeObject)
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
            // console.log("BABI")
            handleReset();
          }
        } else if (initPath === "") {
          setInitPath(pathname);
          setCurrPath(pathname);
          handleReset();
        }
      }, [pathname]);

      // useEffect(() => {
      //   // console.log("BABI", cameraControlsRef.current);
      //   setCameraRotation(cameraRotation + 0.0001);
      // }, []);

      useFrame(() => {
        if (cameraControlsRef.current) {
          if (name === null) {
            if (meshRef.current) {
              setCameraRotation(cameraRotation + 0.0025);
              meshRef.current.rotation.y -= 0.0025;
            }
            // const rotateX = cameraRotation + 0.005;
            // cameraControlsRef.current.rotateAzimuthTo(
            //   (cameraRotation + 0.005),
            //   true
            // );
            // setCameraRotation(rotateX);
            // setCameraRotation([0,cameraRotation[1]-0.01,0]);
            // console.log(cameraControlsRef)
          }
        }
      });

      // useEffect(()=>{
      //   if (cameraControlsRef.current) {
      //     if (name === null) {
      //       // if (meshRef.current) {
      //       //   setCameraRotation(cameraRotation+0.01);
      //       //   meshRef.current.rotation.y -= 0.01;
      //       // }
      //       const rotateX = cameraRotation + 0.0001;
      //       cameraControlsRef.current.rotateAzimuthTo(
      //         (cameraRotation + 0.0001),
      //         true
      //       );
      //       setCameraRotation(rotateX);
      //       // setCameraRotation([0,cameraRotation[1]-0.01,0]);
      //       // console.log(cameraControlsRef)
      //     }
      //   }
      // },[cameraRotation])

      // useEffect(()=>{
      //   const timeoutId = setTimeout(() => {
      //     setAutoRotateEnabled(true)
      //   }, 2000);

      //   // Cleanup function to clear the timeout if the component unmounts
      //   return () => clearTimeout(timeoutId);
      // },[autoRotateEnabled])

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
                          // cameraControlsRef.current.rotateAzimuthTo(
                          //   cameraRotation,
                          //   false
                          // );
                          if (meshRef.current) {
                            // setCameraRotation(cameraRotation + 0.005);
                            // meshRef.current.rotation.y = 0;

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

  // useEffect(() => {
  //   state.current = null;
  //   state.position = [0, -10, 80];
  // }, []);

  return (
    <Suspense>
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
        {/* <pointLight position={[0,0,0]} intensity={50} />
        <directionalLight position={[0,0,0]} intensity={50}/> */}
        <pointLight position={[100, 100, 100]} intensity={0.7} />
        <hemisphereLight
          color="#FF407D"
          groundColor="#ffffff"
          // position={[-7, 25, 13]}
          position={[0, 0.8, 0]}
          intensity={0.7}
        />
        {/* <ambientLight intensity={2} /> */}
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
