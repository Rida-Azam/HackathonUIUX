import { TiTick } from 'react-icons/ti';
function Discount() {

  return (

<div>
  {/* Section Title */}
  <h2 className="text-2xl font-bold text-textcontact font-josefin text-center mb-8 mt-4">
    Discount Item
  </h2>

  {/* Navigation Section */}
  <nav className="flex justify-center items-center space-x-6 text-textcontact font-medium">
    <a
      href="#"
      className="hover:text-pink-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
    >
      Wood Chair
    </a>
    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
    <a
      href="#"
      className="hover:text-pink-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
    >
      Plastic Chair
    </a>
    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
    <a
      href="#"
      className="hover:text-pink-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
    >
      Sofa Collection
    </a>
  </nav>

  <div className="bg-white p-6 max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        {/* Title Section */}
        <h2 className="text-textcontact font-bold text-2xl lg:text-3xl">
          20% Discount Of All Products
        </h2>
        <p className="text-pink-600 font-semibold text-lg mt-2">Eams Sofa Compact</p>

        {/* Description Section */}
        <p className="text-[#B8B8DC] text-sm lg:text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-4 mt-6 text-[#B8B8DC]">
          <p className="flex items-center">
            <TiTick className="text-[#7569B2] text-xl mr-2" />
            Material expose like metals
          </p>
          <p className="flex items-center">
            <TiTick className="text-[#7569B2] text-xl mr-2" />
            Clear lines and geometric figures
          </p>
          <p className="flex items-center">
            <TiTick className="text-[#7569B2] text-xl mr-2" />
            Simple neutral colours
          </p>
          <p className="flex items-center">
            <TiTick className="text-[#7569B2] text-xl mr-2" />
            Material expose like metals
          </p>
        </div>

        {/* Button Section */}
        <button className="mt-6 bg-pink1 text-white py-2 px-6  font-semibold hover:bg-pink-700">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        {/* Circular Background */}
        <div className="absolute inset-0 w-80 h-80 bg-[#FCECF1] rounded-full mx-auto"></div>
        {/* Chair Image */}
        <img
          src="/assets/images/detail.png"
          alt="Chair"
          className="relative bottom-8 z-10 w-120"
        />
      </div>
    </div>

</div>
  )
} 

export default Discount




{/* <div>
  {/* Section Title */}
  // <h2 className="text-2xl font-bold text-textcontact font-josefin text-center mb-8 mt-4">
  //   Discount Item
  // </h2>

  {/* Navigation Section */}
  // <nav className="relative flex justify-center items-center text-textcontact font-medium space-x-4 mb-6">
   

    {/* Navigation Links */}
  //   <a href="#" className="hover:underline hover:text-pink1 ">Wood Chair</a>
  //   <a href="#" className="hover:underline hover:text-pink1 ">Plastic Chair</a>
  //   <a href="#" className="hover:underline ">Sofa Collection</a>
  // </nav>

  {/* Main Content Section */}
  // <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-4">
    {/* Text Section */}
    {/* <div className="max-w-lg text-center lg:text-left lg:mr-12 relative">
      <h3 className="text-3xl font-bold text-blue-900 mb-2">20% Discount Of All Products</h3>
      <p className="text-lg font-semibold text-pink-600 mb-4">Earns Sofa Compact</p>
      <p className="text-sm text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
      </p>
      <ul className="list-none space-y-2 text-sm text-gray-600 mb-6">
        <li>✔ Material expose like metals</li>
        <li>✔ Simple neutral colours</li>
        <li>✔ Clear lines and geometric figures</li>
        <li>✔ Material expose like metals</li>
      </ul>
      <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600">
        Shop Now
      </button>
    </div> */}

    {/* Image Section */}
    // <div className="relative w-full max-w-sm lg:max-w-md flex items-center justify-center mt-8 lg:mt-0">
      {/* Circular Background */}
      // <div className="absolute inset-0 w-80 h-80 bg-[#FCECF1] rounded-full mx-auto"></div>
      {/* Chair Image */}
      {/* <Image
        src="/assets/images/detail.png"
        alt="Chair"
        width={550}
        height={600}
        className="relative bottom-8 z-10"
      />
    </div>
  </div>
</div>  */}
