import ThreeTileCard from "../components/ThreeTileCard";
import Banner from "../components/Banner";
import FiftyFifty from "@/components/FiftyFifty";
import ServicesCards from "../components/ServicesCards";
import LogisticsWorkflow from "../components/LogisticsWorkflow";
import ProductsTransport from "@/components/ProductsTransport";
import TransportSection from "@/components/TransportSection";
import UpdatedArticles from "@/components/UpdatedArticles";


export default function Home() {
  return (
    <div>
      <Banner />
      <ThreeTileCard />
      <FiftyFifty />
      <ServicesCards />
      <LogisticsWorkflow />
      <TransportSection />  
      <ProductsTransport />
      <UpdatedArticles />
    </div>
  );
}
