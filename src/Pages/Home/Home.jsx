import BestDeal from "./BestDeal/BestDeal";
import Banner from "./Banner/Banner";
import Gallery from "./Gallary/Gallary";
import Tabs from "./Tabs/Tabs";
import Contact from "./sendSms/contact";
import NewsLetter from "./NewsLetter/NewsLetter";
import Offer from "./Offer/Offer";
import Faq from "./Faq/Faq";
import What from "./WhatOffer/What";
import CountClient from "./CountClient/CountClient";
import ClientSay from "./ClientSay/ClientSay";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offer></Offer>
      <Gallery></Gallery>
      <Tabs></Tabs>
      <BestDeal></BestDeal>
      <What></What>
      <CountClient></CountClient>
      <ClientSay></ClientSay>
      <Faq></Faq>
      <Contact></Contact>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
