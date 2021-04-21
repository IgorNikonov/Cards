import API from "./API.js";


const handleSubmit = async (e) => {
  const res = await API.login({email:"dsdsd@d.d", password: "123123!"});

  API.saveToken(res);

};
