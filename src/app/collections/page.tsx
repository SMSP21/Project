"use client"

import { useState } from 'react';
import Layout from "@/layout/layout";

const images = [
    { src: "/image.png", caption: "Image 1", description: "ITHAQUE is a creative journey bringing together acrylic and polyester. The rich shades come from the decorative yarns in the warp and weft. With its soft and dense loops, mixed colours, this fabric is designed for seating. ITHAQUE is..." },
    { src: "/image.png", caption: "Image 2", description: "Description for Image 2" },
    { src: "/image.png", caption: "Image 3", description: "Description for Image 3" },
    { src: "/image.png", caption: "Image 4", description: "Description for Image 4" },
    { src: "/image.png", caption: "Image 5", description: "Description for Image 5" },
    { src: "/image.png", caption: "Image 6", description: "Description for Image 6" },
    { src: "/image.png", caption: "Image 7", description: "Description for Image 7" },
    { src: "/image.png", caption: "Image 8", description: "Description for Image 8" },
    { src: "/image.png", caption: "Image 9", description: "Description for Image 9" },
    { src: "/image.png", caption: "Image 10", description: "Description for Image 10" },
    { src: "/image.png", caption: "Image 11", description: "Description for Image 11" },
    { src: "/image.png", caption: "Image 12", description: "Description for Image 12" },
    { src: "/image.png", caption: "Image 13", description: "Description for Image 13" },
    { src: "/image.png", caption: "Image 14", description: "Description for Image 14" },
  ];

const IMAGES_PER_PAGE = 8;

export default function Collections() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
  const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-black font-bold mb-4 text-center">Collections</h1>

    
      <div className="flex flex-wrap -mx-2">
        {currentImages.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <div
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <div className="absolute top-0 left-0 right-0 bottom-0  text-white p-4 opacity-90 z-10 flex items-center justify-center">
                  <p className="text-sm leading-tight border p-20">{image.description}</p>
                </div>
              )}
              <img
                src={image.src}
                alt={`Collection image ${index + 1}`}
                className={`w-full h-auto object-cover rounded transition-opacity ${
                  hoveredIndex === index ? 'opacity-50' : 'opacity-100'
                }`}
              />
              <p className="mt-2 text-center text-sm font-medium user-select-none">{image.caption}</p>

            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}