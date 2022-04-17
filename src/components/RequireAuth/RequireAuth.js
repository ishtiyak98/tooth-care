import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    console.log(user);

    if (loading) {
      return(
          <div>
              <h3>Loading</h3>
          </div>
      );
  }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

  return children;
};

export default RequireAuth;
