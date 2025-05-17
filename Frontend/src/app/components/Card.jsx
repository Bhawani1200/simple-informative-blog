// import React from "react";

// const Card = () => {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//       {/* Title Section */}
//       {/* <div className="text-center py-10">
//         <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
//           Discover New Adventures
//         </h1>
//         <p className="text-lg text-gray-600 dark:text-gray-400">
//           Explore, discover, and find inspiration through these exciting
//           journeys.
//         </p>
//       </div> */}
//       {/* Content Section */}
//       <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
//         <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
//           <div className="relative">
//             <a
//               href="#_"
//               className="block overflow-hidden group rounded-xl shadow-lg"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmb3Jlc3R8ZW58MHwwfHx8MTcyNjkxODYzNHww&ixlib=rb-4.0.3&q=80&w=1080"
//                 className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
//                 alt="Adventure"
//               />
//             </a>
//             <div className="relative mt-5">
//               <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
//                 September 10th 2023
//               </p>
//               <a href="#" className="block mb-3 hover:underline">
//                 <h2 className="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
//                   Journey to the Mountains
//                 </h2>
//               </a>
//               <p className="mb-4 text-gray-700 dark:text-gray-300">
//                 Escape the hustle and explore the serene beauty of the
//                 mountains. Discover the peace and adventure that awaits.
//               </p>
//               <a
//                 href="#_"
//                 className="font-medium underline text-purple-600 dark:text-purple-400"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//           <div className="relative">
//             <a
//               href="#_"
//               className="block overflow-hidden group rounded-xl shadow-lg"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
//                 className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
//                 alt="Ocean"
//               />
//             </a>
//             <div className="relative mt-5">
//               <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
//                 September 15th 2023
//               </p>
//               <a href="#" className="block mb-3 hover:underline">
//                 <h2 className="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
//                   Explore the Deep Oceans
//                 </h2>
//               </a>
//               <p className="mb-4 text-gray-700 dark:text-gray-300">
//                 Dive into the deep oceans and explore the beauty and mystery of
//                 the underwater world. A truly unforgettable experience.
//               </p>
//               <a
//                 href="#_"
//                 className="font-medium underline text-purple-600 dark:text-purple-400"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//           <div className="relative">
//             <a
//               href="#_"
//               className="block overflow-hidden group rounded-xl shadow-lg"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080"
//                 className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
//                 alt="Desert Adventure"
//               />
//             </a>
//             <div className="relative mt-5">
//               <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
//                 October 5th 2023
//               </p>
//               <a href="#" className="block mb-3 hover:underline">
//                 <h2 className="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
//                   Desert Safari
//                 </h2>
//               </a>
//               <p className="mb-4 text-gray-700 dark:text-gray-300">
//                 Venture into the heart of the desert and experience the thrill
//                 of a safari amidst the dunes.
//               </p>
//               <a
//                 href="#_"
//                 className="font-medium underline text-purple-600 dark:text-purple-400"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Card;
"use client"
import React from "react";

const Card = () => {
  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
