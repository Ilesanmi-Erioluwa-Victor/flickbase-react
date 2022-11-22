import { Navigate, useLocation } from "react-router-dom";

export const PreventSigIn = (props) => {

     const location = useLocation();

     return (
        <>
        {
            props.users.auth ?
            <Navigate to="/auth" state={{ from: location }} replace />
            :
            props.children
        }
        </>
     )
};
