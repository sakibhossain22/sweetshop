/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const AddProductPrivate = ({ children }) => {
  const location = useLocation()
  console.log(location);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>

  }
  if (user) {
    return children;
  }
  return <Navigate to='/login'></Navigate>
};

export default AddProductPrivate;