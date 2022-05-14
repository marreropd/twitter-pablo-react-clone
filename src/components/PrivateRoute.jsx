import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";

function PrivateRoute({ element, ...rest }) {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  if (!user) {
    // return <Navigate to="/login" />;
    return <Navigate to="/login" replace state={{ from: location }} />;
  } else {
    return element;
  }
}

export default PrivateRoute;
