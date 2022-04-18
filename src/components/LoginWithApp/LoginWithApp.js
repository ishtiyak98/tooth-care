import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const LoginWithApp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  //!--------google Sign-in--------
  const handleGoogle = () => {
    signInWithGoogle();
  };

  if (googleUser) {
    Swal.fire({
      title: "Welcome",
      text: "Successfully logged in",
      icon: "success",
    });
    navigate(from, { replace: true });
  }

  //!--------google Sign-in Error --------
  useEffect(() => {
    if (googleError) {
      Swal.fire({
        title: "Error",
        text: googleError.message,
        icon: "error",
      });
    }
  }, [googleError]);


  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="w-50 px-2">
          <hr />
        </div>
        <div className="">or</div>
        <div className="w-50 px-2">
          <hr />
        </div>
      </div>

      <button
        onClick={handleGoogle}
        className="btn btn-white border border-2 border-success text-success w-75 d-block py-2 mx-auto my-2 d-flex justify-content-center align-items-center"
      >
        <FcGoogle size={"1.8em"}></FcGoogle>
        <span className="mx-2">Continue with Google</span>
      </button>
    </div>
  );
};

export default LoginWithApp;
