import axios from "axios";

export const googleSignup = async (credential) => {
  const res = await axios.post(
    "http://localhost:3000/api/users/google-signup",
    {
      credential,
    },
    {
      withCredentials: true,
    }
  );

  return res.data;
};