import { db } from "../firebase/firebase-configoration";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  //   updateDoc,
  addDoc,
  doc,
} from "firebase/firestore";
const propertiesCollectionRef = collection(db, "properties");
export const addProperty = (newProperty) => {
  return addDoc(propertiesCollectionRef, newProperty);
};
export const deleteProperty = (id) => {
  const propretyDoc = doc(db, "properties", id);
  return deleteDoc(propretyDoc);
};
export const getAllPropeties = () => {
  return getDocs(propertiesCollectionRef);
};
export const getProperty = (id) => {
  const propertyDoc = doc(db, "properties", id);
  return getDoc(propertyDoc);
};
