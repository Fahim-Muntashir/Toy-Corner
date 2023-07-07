import BestDeal from "./BestDeal/BestDeal";
import Banner from "./Banner/Banner";
import Gallery from "./Gallary/Gallary";
import Tabs from "./Tabs/Tabs";
import Contact from "./sendSms/contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Tabs></Tabs>
      <BestDeal></BestDeal>
      <Contact></Contact>
    </div>
  );
};

export default Home;
