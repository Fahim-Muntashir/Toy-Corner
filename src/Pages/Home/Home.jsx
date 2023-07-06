import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import BestDeal from "./BestDeal/BestDeal";
import Banner from "./Banner/Banner";
import LoginForm from "../Login/SignIn";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestDeal></BestDeal>
    </div>
  );
};

export default Home;
