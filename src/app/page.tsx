import Discount from "./components/discount";
import FeaturedProduct from "./components/featuredProduct";
import Hero from "./components/hero";
import LatestBlog from "./components/latestBlog";
import LatestProduct from "./components/latestProduct";
import Shopex from "./components/shopex";
import TopCategory from "./components/topCategory";
import Trending from "./components/trending";
import Unique from "./components/unique";


export default function Home() {
  return (
   <div>
    <Hero/>
    <FeaturedProduct/>
    <LatestProduct/>
    <Shopex/>
    <Unique/>
    <Trending/>
    <Discount/>
    <TopCategory/>
    <LatestBlog/>
   </div>
  );
}
