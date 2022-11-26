import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

export const Mainlayout = ({ children }) => {
  const site = useSelector( state=>state.site)
  return (
    <Container className={`app_container mb-5`}>
      {children}
      <ToastContainer />
    </Container>
  );
};
