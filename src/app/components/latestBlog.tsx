import React from 'react';
import Image from 'next/image';

function LatestBlog() {
  const blogs = [
    {
      id: 1,
      category: 'SaberAli',
      date: '21 August, 2024',
      title: 'Top Essential Trends in 2021',
      description:
        'More off this less hello samlande lied much over tightly circa horse taped mightly',
      image: '/assets/images/latestblog2.png',
      link: '/blog/top-seasonal-trends-2024',
    },
    {
      id: 2,
      category: 'Surfauxion',
      date: '21 August, 2024',
      title: 'Top Essential Trends in 2021',
      description:
        'More off this less hello samlande lied much over tightly circa horse taped mightly',
      image: '/assets/images/latestblog1.png',
      link: '/blog/lifestyle-trends-2024',
    },
    {
      id: 3,
      category: 'SaberAli',
      date: '21 August, 2024',
      title: 'Top Essential Trends in 2021',
      description:
        'More off this less hello samlande lied much over tightly circa horse taped mightly',
      image: '/assets/images/latestblog3.png',
      link: '/blog/home-decor-trends-2024',
    },
  ];

  return (
    <div className="bg-white mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-textcontact font-josefin text-center mb-8">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-md shadow-lg overflow-hidden max-w-xs mx-auto"
            >
              {/* Blog Image */}
              <div className="w-full h-56 relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Blog Content */}
              <div className="p-4">
                <div className="flex items-center text-sm mb-2">
                  <span className="flex items-center text-textcontact font-medium mr-4">
                    <Image
                      src="/assets/icons/pen.png"
                      alt="Pen Icon"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {blog.category}
                  </span>
                  <span className="flex items-center text-textcontact font-medium">
                    <Image
                      src="/assets/icons/cal.png"
                      alt="Calendar Icon"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-md font-bold font-josefin text-textcontact mb-2 hover:text-pink1">
                  {blog.title}
                </h3>
                <p className="text-sm text-[#72718F] mb-3">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-textcontact font-lato font-medium underline hover:text-pink1"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
