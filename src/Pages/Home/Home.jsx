import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import BestDeal from "./BestDeal/BestDeal";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <BestDeal></BestDeal>
      <Footer></Footer>
    </>
  );
};

export default Home;
