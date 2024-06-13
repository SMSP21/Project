"use client"

import { useState } from 'react';
import Image from 'next/image'

export default function Collections() {
  return (
    <>
    <div className="bg-white">
    <h1 className="text-3xl font-medium font-mulish mb-4 text-center pt-4 text-black mb: pt-10">Collections</h1>
        <div className="flex flex-col space-y-4 mx-2 pb-16 md:mx-4 lg:mx-4 xl:mx-20">
            
          {/* First image group */}
          <div className="flex flex-col md:flex-row h-auto md:h-[900px] space-y-4 md:space-y-0 md:space-x-2">
          {/* Images */}
  <div className="md:w-1/2 pr-4 bg-white-700 h-[400px] md:h-full pl-4 pt-4">
    <div className="relative group h-full">
      <img src="/image.png" alt="Image Caption 1" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <span className="text-white text-lg">Hovered Text for Image 1</span>
      </div>
    </div>
    <figcaption className="text-sm text-center mt-2 text-black">Image Caption 1</figcaption>
  </div>
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col">
    <div className="w-full bg-white-200 h-auto md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-100 p-2 w-1/2">
        <div className="relative h-[250px] md:h-full">
          <img src="/image.png" alt="Image Caption 2" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 2</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 2</figcaption>
      </div>
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-[250px] md:h-full">
          <img src="/image.png" alt="Image Caption 3" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 3</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 3</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-auto md:h-1/2 flex flex-row space-x-2 p-2 mt-4 md:mt-0">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-[250px] md:h-full">
          <img src="/image.png" alt="Image Caption 4" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 4</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 4</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-[250px] md:h-full">
          <img src="/image.png" alt="Image Caption 5" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 5</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 5</figcaption>
      </div>
    </div>
  </div>
</div>



        {/* Second image group */}
        <div className="flex flex-col md:flex-row h-auto md:h-[900px] space-y-4 md:space-y-0 md:space-x-4 pt-5">
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-200 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-100 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 6" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 6</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 6</figcaption>
      </div>
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 7" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 7</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 7</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 8" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 8</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 8</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 9" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 9</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 9</figcaption>
      </div>
    </div>
  </div>
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-200 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-100 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 10" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 10</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 10</figcaption>
      </div>
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 11" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 11</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 11</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-full">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 12" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 12</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 12</figcaption>
      </div>
    </div>
  </div>
</div>

 {/* third image group */}
 <div className="flex flex-col md:flex-row h-auto md:h-[900px] space-y-4 md:space-y-0 md:space-x-4 pt-5">
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-200 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2 pt-4">
      <div className="relative group bg-white-100 p-2 w-full">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 19" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 19</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 13</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 20" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 20</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 14</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 21" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 21</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 15</figcaption>
      </div>
    </div>
  </div>
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-200 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2 pt-4">
      <div className="relative group bg-white-100 p-2 w-full">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 22" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 22</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 16</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 23" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 23</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 17</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 24" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 24</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 18</figcaption>
      </div>
    </div>
  </div>
</div>



   {/* fourth image group */}
   <div className="flex flex-col md:flex-row h-auto md:h-[900px] space-y-4 md:space-y-0 md:space-x-4 pt-5">
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 12" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 12</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 19</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 13" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 13</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 20</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-200 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-100 p-2 w-full">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 14" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 14</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 21</figcaption>
      </div>
    </div>
  </div>
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-200 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2 pt-2">
      <div className="relative group bg-white-100 p-2 w-full">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 15" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 15</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 22</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 16" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 16</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 23</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 17" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 17</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 24</figcaption>
      </div>
    </div>
  </div>
</div>

       {/* fifth image group */}
      {/* Fifth image group */}
<div className="flex flex-col md:flex-row h-auto md:h-[900px] space-y-4 md:space-y-0 md:space-x-4 pt-5">
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-200 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-100 p-2 w-full">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 12" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 12</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 25</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 13" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 13</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 26</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 14" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 14</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 27</figcaption>
      </div>
    </div>
  </div>
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-200 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-100 p-2 w-full">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 15" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 15</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 28</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 16" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 16</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 29</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 17" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 17</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 30</figcaption>
      </div>
    </div>
  </div>
</div>

{/* Sixth image group */}
<div className="flex flex-col md:flex-row h-auto md:h-[900px] space-y-4 md:space-y-0 md:space-x-4 pt-5">
  <div className="md:w-1/2 bg-white-400 h-auto md:h-full flex flex-col space-y-4">
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 18" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 18</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 31</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 19" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 19</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 32</figcaption>
      </div>
    </div>
    <div className="w-full bg-white-300 h-[300px] md:h-1/2 flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-300 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 20" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 20</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 33</figcaption>
      </div>
      <div className="relative group bg-white-400 p-2 w-1/2">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 21" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 21</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 34</figcaption>
      </div>
    </div>
  </div>
  <div className="md:w-1/2 bg-white-400 h-[440px] md:h-[440px] flex flex-col">
    <div className="w-full bg-white-200 h-[440px] md:h-[440px] flex flex-row space-x-4 p-2">
      <div className="relative group bg-white-100 p-2 w-full">
        <div className="relative h-full">
          <img src="/image.png" alt="Image Caption 22" className="w-full h-[405px] object-cover transition-opacity duration-300 hover:opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="text-white text-lg">Hovered Text for Image 22</span>
          </div>
        </div>
        <figcaption className="text-sm text-center mt-2 text-black">Image Caption 35</figcaption>
      </div>
    </div>
  </div>
</div>



      </div>
      </div>
    </>
  )
}
