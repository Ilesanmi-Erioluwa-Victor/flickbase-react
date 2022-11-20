import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { isAuth } from "./store/actions/users";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "./Utils";

import { Home } from "./Components/Home";
import { Header } from "./Components/Navigation/Header";
import { Auth } from "./Components/Auth";
import { Dashboard } from "./Components/Dashboard";

import { Mainlayout } from "./HOC/Mainlayout";

function App() {
    const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();
   const users = useSelector((state) => state.users);

  useEffect( ()=> {
    dispatch(isAuth())
  }, [dispatch])


     useEffect(() => {
       if (users.auth !== null) {
         setLoading(false);
       }
     }, [users]);



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Mainlayout>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/auth" element={<Auth />} />

              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Mainlayout>
        </>
      )}
    </>
  );
}

export default App;
