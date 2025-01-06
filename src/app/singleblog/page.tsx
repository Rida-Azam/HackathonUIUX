




















import React from "react";
import LastImage from "../components/maincomponent/lastimage";
import Sidebar from "../blog/Sidebar";
import BlogComp from "../components/maincomponent/blogComp";
import Sameheader from "../components/maincomponent/sameheader";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaLongArrowAltLeft, FaLongArrowAltRight, FaSearchPlus, FaStar, FaTwitter } from "react-icons/fa";
import Post from "./Post";
import Coment from "./Coment";

function SingleBlog() {
  const products = [
    {
      id: 1,
      name: "Quam sed",
      price: "$32.00",
      old: "$56.00",
      img: "/assets/images/detailproduct1.png",
    },
    {
      id: 2,
      name: "Tristique sed",
      price: "$32.00",
      old: "$56.00",
      img: "/assets/images/detailproduct2.png",
    },
    {
      id: 3,
      name: "A etiam",
      price: "$32.00",
      old: "$56.00",
      img: "/assets/images/detailproduct3.png",
    },
    {
      id: 4,
      name: "Mi nisi",
      price: "$32.00",
      old: "$56.00",
      img: "/assets/images/detailproduct4.png",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <Sameheader
        start="Single Blog Page"
        middle="Home . Pages "
        last=" . Single Blog"
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Blog Component - Left Side */}
        <div className="w-full md:w-3/4">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-start mb-12">
              {/* Image Section */}
              <div className="w-full mb-4">
                <img
                  src={"/assets/images/blogp1.png"}
                  alt={"Mauris at orci non vulputate consequat nec."}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Text Content Section */}
              <div className="w-full">
                <p className="text-gray-500 text-sm mb-2">
                  {"12 Oct 2023"} • {"5 Comments"}
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Mauris at orci non vulputate consequat nec.
                </h3>
                <p className="text-[#8A8FB9] text-sm md:text-base mb-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                <p className="text-[#8A8FB9] text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,{" "}
                </p>

                <blockquote className="bg-[#FAFAFB] border-l-2 p-2 my-5 leading-8 text-gray-500 border-pink1 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Commodo dictum sapien,
                  amet, consequat toamk risusu reiciendis.
                </blockquote>

                <div className="grid md:grid-cols-2 gap-5">
                  <Image
                    src={"/assets/images/postdetail1.png"}
                    width={418}
                    height={245}
                    alt="girl"
                    className="rounded-md"
                  />
                  <Image
                    src={"/assets/images/postdetail2.png"}
                    width={418}
                    height={245}
                    alt="girl"
                    className="rounded-md"
                  />
                </div>

                <p className="py-8 text-[#8A8FB9] text-sm md:text-base mb-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,{" "}
                </p>
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 lg:px-16">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-sm transition-shadow duration-300"
                    >
                      {/* Product Image */}
                      <div className="relative group w-full h-64 flex items-center justify-center rounded-t-md">
                        <Image
                          src={product.img}
                          alt={product.name}
                          width={250}
                          height={200}
                          className="object-contain"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="mt-4 text-center">
                        <p className="font-medium font-josefin text-textcontact">
                          {product.name}
                        </p>

                        {/* Prices */}
                        <div className="flex justify-center items-center gap-2 mt-2">
                          <p className="text-textcontact font-lato font-bold">
                            {product.price}
                          </p>
                          <p className="text-pink1 font-lato line-through text-sm">
                            {product.old}
                          </p>
                          <div className="flex items-center">
                            {[...Array(4)].map((_, index) => (
                              <FaStar
                                key={index}
                                className="text-[#FFC416] text-xs"
                              />
                            ))}
                            <FaStar className="text-[#B2B2B2] text-xs" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="py-8 text-[#8A8FB9] text-sm md:text-base mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
                <p className="py-2 text-[#8A8FB9] text-sm md:text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,{" "}
                </p>
                <div className="border-b mt-10"></div>

<div className='flex justify-center w-full py-10 items-center gap-2'>
                        <div className='flex justify-center items-center bg-blue size-7 rounded-full text-white'>
                            <FaFacebookF />
                        </div>
                        <div className='flex justify-center items-center bg-pink1 size-7 rounded-full text-white'>
                            <FaInstagram />
                        </div>
                        <div className='flex justify-center items-center bg-[#37DAF3] size-7 rounded-full text-white'>
                            <FaTwitter />
                        </div>
                    </div>


                {/* Navigator */}

                <div className='flex justify-between items-center mb-16 bg-[#F7F8FB] text-[#8A8FB9] font-lato px-3 py-3 rounded-md'>
        <div className='flex justify-start items-center gap-2'>
            <FaLongArrowAltLeft />
            <p>Previous Post</p>
        </div>
        <div className='flex justify-start items-center gap-2'>
            <p>Next Post</p>
            <FaLongArrowAltRight />
        </div>
    </div>


<Post/>
<Coment/>



              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>


      </div>
      <LastImage/>
    </div>
  );
}

export default SingleBlog;
