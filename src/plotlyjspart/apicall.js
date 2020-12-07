import { useState } from "react";
import axios from "axios";

export default function ApiCall() {
  const [users, setUsers] = useState([]);

  // (single S3 Biochem used as example URL)

  const getUsers = async () => {
    try {
      const info = await axios.get("KEENURL");
      console.log("async", info.data);
      setUsers(info.data.result);
    } catch (err) {
      console.log("er", err);
    }
  };

  getUsers();

  // function dowloawd() {
  //   axios
  //     .get(
  //       "KEENURL"
  //     )
  //     .then((response) => {
  //       console.log("hi", response.data.result);
  //       setUsers(response.data.result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return null;
  //     });
  // }

  // //dowloawd();

  //the above was a synchrnous function

  const keenoutput = JSON.stringify(users);
  console.log("preout", keenoutput);

  return { keenoutput };
}
