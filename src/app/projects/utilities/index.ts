import { db } from "@/constants/firebase";
import { getDocs, query, collection, orderBy } from "firebase/firestore";

export const getData = async () => {
  const projects: any[] = [];
  try {
    const res = await getDocs(
      query(collection(db, "projects"), orderBy("desc"))
    );
    res.forEach((proj) => {
      projects.push(proj.data());
    });
  } catch (e) {
    throw new Error("API FAIL");
  }

  return projects;
};
