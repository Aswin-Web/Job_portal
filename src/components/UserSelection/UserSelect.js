// import React from "react";
import SelectionUI from "./UserSelectUI";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { changeUserInfo } from "../../redux/reducers/auth.data";
// import axios from "axios";
// import UseAuth from "../../hooks/auth";
// import UserSelectUI from "./UserSelectUI";
// const UserSelect =async () => {
//   const dispatch = useDispatch();

//   const data =await axios.get("http://localhost:5001/auth/google/test", {
//     withCredentials: true,
//   });

//   const userInfo =await  {
//     email: data.data.email,
//     name: data.data.name,
//     role: data.data.role,
//     verification: data.data.verification,
//     _id: data.data._id,
//     token: data.data.token,
//   };
//   
//   localStorage.setItem("user", JSON.stringify(userInfo.token));

//     if (await userInfo.role === "user" && await userInfo.verification === true) {
//       return navigate("/user");
//     }
//     if (userInfo.role === "collegeadmin" && userInfo.verification === true) {
//       return navigate("/collegeadmin");
//     }
//     if (userInfo._id === "") {
//       return <UserSelectUI />;
//     }
//     return <h1>hello</h1>

// }
// export default UserSelect;

import React, { useEffect } from "react";
import axios from "axios";

const UserSelect = () => {
  
  const navigate = useNavigate();
  useEffect(() => {
    return async () => {
      const data = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/google/test`, {
        withCredentials: true,
      });

      const userInfo = await {
        email: data.data.email,
        name: data.data.name,
        role: data.data.role,
        verification: data.data.verification,
        _id: data.data._id,
        token: data.data.token,
      };
      
      localStorage.setItem("user", JSON.stringify(userInfo.token));
      if (
        (await userInfo.role) === "user" &&
        (await userInfo.verification) === true
      ) {
        return navigate("/user");
      }
      if (userInfo.role === "collegeadmin" && userInfo.verification === true) {
        return navigate("/collegeadmin");
      }
      if (userInfo.verification === false) {
        return navigate('/selectuser')
      }
    };
  });

  return ;
};

export default UserSelect;
