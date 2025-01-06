import Image from 'next/image';
import Sameheader from '../components/maincomponent/sameheader';
import AboutCard from '../components/aboutcard';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div>
      <Sameheader start="About Us" middle="Home . Pages" last=" . About Us" />

      {/* About Section */}
      <div className="w-full px-5 md:px-10 lg:px-40 py-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          {/* Left Image Section (No Shadow) */}
          <div className="hidden lg:block bg-blue_navy border border-b-8 w-[552px] h-[409px] rounded-md relative">
            <Image
              src={"/assets/images/about1.png"}
              width={400}
              height={250}
              className="rounded-md absolute w-1/2 lg:w-full -top-1 -right-4"
              alt="about"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-start justify-start w-full md:w-[550px] md:pl-10">
            <h1 className="font-bold text-3xl text-textcontact py-3 font-josefin">
              Know about our Ecommerce <br /> Business History!
            </h1>
            <p className="font-lato text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="flex justify-start items-center py-10">
             <Link href='/contact'>
             <button className="bg-pink1 hover:bg-pink-500 rounded-sm font-josefin px-8 text-white py-3">
                Contact Us
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center px-5 lg:px-40">
        <h1 className="font-bold text-3xl text-black py-3 font-josefin">
          Our Feature
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 py-10 gap-10">
          <AboutCard title="Free Delivery" img="/assets/images/aboutmid1.png" />
          <AboutCard
            title="100% Cash Back"
            img="/assets/images/aboutmid2.png"
          />
          <AboutCard
            title="Quality Product"
            img="/assets/images/aboutmid3.png"
          />
          <AboutCard title="24/7 Support" img="/assets/images/aboutmid4.png" />
        </div>
      </div>

      {/* Last Section */}
      <div className="py-20 px-5 lg:px-40 w-full bg-[#FBFBFF]">
        <h1 className="font-bold text-3xl text-black py-3 font-josefin text-center">
          Our Client Say!
        </h1>
        <div className="flex-col flex justify-center items-center py-10">
          <div className="flex justify-center items-center gap-2">
            <Image
              src={"/assets/images/c1.png"}
              width={50}
              height={50}
              alt="user"
            />
            <Image
              src={"/assets/images/c2.png"}
              width={55}
              height={59}
              className=" mb-1"
              alt="user"
            />
            <Image
              src={"/assets/images/c3.png"}
              width={50}
              height={50}
              className=""
              alt="user"
            />
          </div>
          <div className="py-5">
            <p className="font-semibold font-lato text-2xl text-black">
              Selina Gomezi
            </p>
            <p className="text-center text-[10px] font-lato text-[#8A8FB9]">
              CEO at Webaccy Digital
            </p>
          </div>
          <p className="font-bold font-lato text-center text-sm text-[#8A8FB9] w-full md:w-[690px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a
            enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
            aliquam lacus volutpat praesent.
          </p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-5 h-1 bg-pink_ligh rounded-md"></div>
          <div className="w-7 h-1 bg-pink1 rounded-md"></div>
          <div className="w-5 h-1 bg-pink_ligh rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
