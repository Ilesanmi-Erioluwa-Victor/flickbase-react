import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify"

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


export const Toast = (type, msg) => {
  switch (type) {
    case "SUCCESS":
      break;

    case "ERROR":
      break;
      
  }
 
}