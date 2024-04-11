import { db } from "@/constants/firebase";
import { getDocs, query, collection, orderBy } from "firebase/firestore";

export const fetchSocials = async () => {
  const socials: any[] = [];
  try {
    const res = await getDocs(
      query(collection(db, "socials"))
    );
    res.forEach((soc) => {
      socials.push(soc.data());
    });
  } catch (e) {
    throw new Error("API FAIL");
  }
  return socials;
};
