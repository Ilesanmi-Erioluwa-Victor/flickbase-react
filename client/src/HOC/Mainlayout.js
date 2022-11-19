import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

export const Mainlayout = ({ children }) => {
  return <Container className={`app_container mb-5`}>{children}</Container>;
};
