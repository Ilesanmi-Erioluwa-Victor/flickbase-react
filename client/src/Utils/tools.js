import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify"
import { cookie } from "react-cookie";



export const errorHelper = (formik, values) => ({
  error: formik.errors[values] && formik.touched[values] ? true : false,
  helperText:
    formik.errors[values] && formik.touched[values]
      ? formik.errors[values]
      : null,
});

export const Loader = ({ wrapperStyle}) => {
  return (
    <div className="root_loader">
      <BallTriangle wrapperStyle={wrapperStyle} />{" "}
    </div>
  );
};


export const showToast = (type, msg) => {
  switch (type) {
    case "SUCCESS":
      toast.success(msg, {
        position : toast.POSITION.BOTTOM_RIGHT
      })
      break;

    case "ERROR":
        toast.error(msg, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      break;
      default : 
      return (`Sorry, no type was found ...`)
  }
 
}


export const getTokenCookie = () => cookie.set("", "x-access-token", { path: "/", expires : "30d" });
export const removeTokenCookie = () => cookie.remove("x-access-token", { path: "/" });
export const getAuthHeader = () => {
 return { headers: { 'Authorization': `Bearer ${getTokenCookie()}` } };
};

export const AdminTitle = ({ title }) => (
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 className="h2">{title}</h1>
  </div>
);