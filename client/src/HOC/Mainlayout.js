import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Mainlayout = ({ children }) => {
  return (
    <Container className={`app_container mb-5`}>
      {children}
      <ToastContainer />
    </Container>
  );
};
