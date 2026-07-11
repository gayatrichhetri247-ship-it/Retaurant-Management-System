import { GoogleLogin as GoogleOAuthLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthSuccess } from "../../redux/features/authSlice";

const GoogleLogin = ({
  endpoint = "google-login",
  redirect = "/home",
  className = "",
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/users/${endpoint}`,
        {
          credential: credentialResponse.credential,
        },
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("rememberedEmail", res.data.user.email);

      dispatch(AuthSuccess(res.data.user));

      navigate(redirect);
    } catch (error) {
      alert(error.response?.data?.message || "Google Authentication Failed");
    }
  };

  return (
    <div className={className}>
      <GoogleOAuthLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Google Authentication Failed")}
      />
    </div>
  );
};

export default GoogleLogin;