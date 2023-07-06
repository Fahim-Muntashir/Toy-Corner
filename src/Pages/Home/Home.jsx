import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import BestDeal from "./BestDeal/BestDeal";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <BestDeal></BestDeal>
      <Footer></Footer>
    </>
  );
};

export default Home;
