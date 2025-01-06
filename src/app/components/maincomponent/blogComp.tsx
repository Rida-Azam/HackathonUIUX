import React from 'react';
import LastImage from './lastimage';
import Image from 'next/image';

function BlogComp() {
  const posts = [
    {
      id: 1,
      title: 'Mauris at orci non vulputate consequat nec.',
      date: 'Aug 09 2020',
      name: 'Surf Auxion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare...',
      image: '/assets/images/blogp1.png',
    },
    {
      id: 2,
      title: 'Aenean vitae in aliquam ultricies lectus. Etiam.',
      date: 'Aug 09 2020',
      name: 'Surf Auxion',
      description:
        'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper...',
      image: '/assets/images/blogp2.png',
    },
    {
      id: 3,
      title: 'Sit nam congue feugiat nisl, mauris amet nisi.',
      date: 'Aug 09 2020',
      name: 'Surf Auxion',
      description:
        'Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna...',
      image: '/assets/images/blogp3.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col items-start mb-12">
          {/* Image Section */}
          <div className="w-full mb-4">
  <Image
    src="/assets/images/blogp1.png"
    alt="Mauris at orci non vulputate consequat nec."
    width={800} // Adjust width as needed
    height={400} // Adjust height as needed
    className="rounded-lg"
  />
</div>

          {/* Text Content Section */}
          <div className="w-full">
            <div className="flex items-center text-sm mb-2">
              <span className="flex items-center text-textcontact font-medium mr-4">
                <Image
                  src="/assets/icons/pen.png"
                  alt="Pen Icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <div className="bg-[#FFE7F9] px-8 py-1">{post.name}</div>
              </span>
              <span className="flex items-center text-textcontact font-medium">
                <Image
                  src="/assets/icons/cal.png"
                  alt="Calendar Icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <div className="bg-[#FFE7F9] px-6 py-1">{post.date}</div>
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-3">{post.title}</h3>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              {post.description}
            </p>
            <a
              href="/singleblog"
              className="text-pink-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      ))}

      {/* Pagination Section */}
      <div className="flex justify-center space-x-3 mt-8">
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-pink-500 text-gray-700 hover:text-white rounded">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-pink-500 text-gray-700 hover:text-white rounded">
          3
        </button>
      </div>

      <LastImage />
    </div>
  );
}

export default BlogComp;
