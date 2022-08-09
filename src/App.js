import { useEffect, useState } from "react";
import { getAllPropeties } from "./services/propertiesServices";
const App = () => {
  const [properties, seProperties] = useState([]);
  useEffect(() => {
    getPropeties();
  }, []);
  const getPropeties = async () => {
    const data = await getAllPropeties();
    console.log(data.docs);
    seProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(properties);
  return <div>hell world</div>;
};

export default App;
