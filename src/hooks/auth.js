import jwt_decode from "jwt-decode";

const UseAuth = () => {
  // const token = useSelector((state) => state.auth.value.token);
  const token=JSON.parse(localStorage.getItem("user"))

  if (token !== undefined || token !== "" || token !== null) {
    try {
      var decoded = jwt_decode(token);
      console.log(decoded)
      return {...decoded,token};
    } catch (error) {
      return {
        email: "",
        name: "",
        role: "none",
        verification: false,
        _id: "",
        displayPicture:'',

        token: "",
      };
    }
  } else {
    return {
      email: "",
      name: "",
      role: "none",
      verification: false,
      _id: "",
      displayPicture:'',

      token: "",
    };
  }
};
export default UseAuth