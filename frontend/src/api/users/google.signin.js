import axios from "axios";

export const googleSignin = async (credential) => {
  const res = await axios.post(
    "http://localhost:3000/api/users/google-login",
    {
      credential,
    },
    {
      withCredentials: true,
    }
  );

  return res.data;
};