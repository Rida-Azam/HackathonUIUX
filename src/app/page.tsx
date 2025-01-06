import NotFound from "./notfound/page";
import About from "./about/page";
import Cart from "./cart/page";
import Discount from "./components/discount";
import FeaturedProduct from "./components/featuredProduct";
import Hero from "./components/hero";
import LatestBlog from "./components/latestBlog";
import LatestProduct from "./components/latestProduct";
import BlogComp from "./components/maincomponent/blogComp";
import Top from "./components/maincomponent/top";
import Navbar from "./components/navbar";
import Shopex from "./components/shopex";
import TopCategory from "./components/topCategory";
import Trending from "./components/trending";
import Unique from "./components/unique";
import Demo from "./demo/page";
import Faq from "./faq/page";
import OrderComplete from "./ordercomplete/page";

export default function Home() {
  return (
   <div>
    {/* <Top/>
    <Navbar/> */}
    {/* <NotFound/> */}
    {/* <Faq/> */}
    {/* <OrderComplete/> */}
    {/* <About/> */}
    {/* <Cart/> */}
    {/* <BlogComp/> */}
    {/* <Demo/> */}
    <Hero/>
    <FeaturedProduct/>
    <LatestProduct/>
    <Shopex/>
    <Unique/>
    <Trending/>
    <Discount/>
    <TopCategory/>
    <LatestBlog/>
    Home
   </div>
  );
}
