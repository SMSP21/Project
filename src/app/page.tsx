import Image from "next/image";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="p-6 overflow-y-auto h-80vh">
        <h1 className="text-1xl md:text-3xl font-bold text-black mb-4">Browse by Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Placeholder for the fourth item on larger screens */}
          <div className="hidden"></div>

          <div className="group flex sm:flex-row md:flex-col">
            <div className="relative h-32 md:h-64 lg:h-96 w-full order-2 sm:order-1">
              <img src="/image.png" alt="New in Fabrics" className="w-full h-full object-cover" />
            </div>
            {/* Different caption for small screens */}
            <div className="bg-white bg-opacity-80 p-2 flex items-center w-full order-1 sm:order-2">
              <p className="text-sm md:text-xs text-black hidden sm:block">NEW IN FABRICS →</p>
              <p className="text-sm md:text-xs text-black sm:hidden">
                <span className="block mb-1">Fabrics</span>
                <span className="font-bold">NEW IN →</span>
              </p>
            </div>
          </div>

          <div className="hidden"></div>

          <div className="group flex sm:flex-row md:flex-col">
            <div className="relative h-32 md:h-64 lg:h-96 w-full order-2 sm:order-1">
              <img src="/image.png" alt="New in Wallpapers" className="w-full h-full object-cover" />
            </div>
            {/* Different caption for small screens */}
            <div className="bg-white bg-opacity-80 p-2 flex items-center w-full order-1 sm:order-2">
              <p className="text-sm md:text-xs text-black hidden sm:block">NEW IN WALLPAPERS →</p>
              <p className="text-sm md:text-xs text-black sm:hidden">
                <span className="block mb-1">Wallpapers</span>
                <span className="font-bold">NEW IN →</span>
              </p>
            </div>
          </div>

          <div className="hidden"></div>

          <div className="group flex sm:flex-row md:flex-col">
            <div className="relative h-32 md:h-64 lg:h-96 w-full order-2 sm:order-1">
              <img src="/image.png" alt="New in Trims" className="w-full h-full object-cover" />
            </div>
            {/* Different caption for small screens */}
            <div className="bg-white bg-opacity-80 p-2 flex items-center w-full order-1 sm:order-2">
              <p className="text-sm md:text-xs text-black hidden sm:block">NEW IN TRIMS →</p>
              <p className="text-sm md:text-xs text-black sm:hidden">
                <span className="block mb-1">Trims</span>
                <span className="font-bold">NEW IN →</span>
              </p>
            </div>
          </div>

          {/* Placeholder for the fourth item on larger screens */}
          <div className="hidden"></div>

          {/* For small screens, move caption to the left and position the picture to the right */}
          <div className="group flex sm:flex-row md:flex-col">
            <div className="relative h-32 md:h-64 lg:h-96 w-full order-2 sm:order-1">
              <img src="/image.png" alt="New in Accessories" className="w-full h-full object-cover" />
            </div>
            {/* Different caption for small screens */}
            <div className="bg-white bg-opacity-80 p-2 flex items-center w-full order-1 sm:order-2">
              <p className="text-sm md:text-xs text-black hidden sm:block">NEW IN RUGS AND ACCESSORIES →</p>
              <p className="text-sm md:text-xs text-black sm:hidden">
              <span className="block mb-1">Rugs &</span>
                <span className="block mb-1">Accessories</span>
                <span className="font-bold">NEW IN →</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
