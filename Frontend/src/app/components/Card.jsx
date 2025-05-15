// import Link from "next/link";
// import React from "react";

// const Card = () => {
//   return (
//    <Link href="/{id}" className=" px-3 py-3">
//      <div className="bg-white rounded shadow max-w-md mx-auto ">
//       <header className="p-4"> 
//         <img
//           src="https://deadsea.com/wp-content/uploads/2019/02/MOST-BUTIFUL-NATURAL-PLACES--1024x771.jpg"
//           className="float-left rounded-full w-10 h-10 m-1 mr-3"
//         />
//         <h3 className="text-lg font-bold">Island Holiday Escape</h3>
//         <p className="text-sm text-gray-600">
//           5 nights (inc flights) from $1999
//         </p>
//       </header>
//       <section>
//         <img
//           src="https://i0.wp.com/traveltoyournature.com/wp-content/uploads/2023/07/beautiful-nature-destinations-south-india.jpg?resize=600%2C800"
//           className="w-full"
//         />
//         <p className="text-sm text-gray-600 p-4">
//           Omnis consectetur voluptatem labore aut et vel itaque recusandae. Et
//           molestiae iure qui et nihil minus nes ciunt.
//         </p>
//       </section>
//       <footer className="p-4">
//         <a
//           href="#"
//           className="uppercase font-bold text-sm text-blue-700 hover:underline mr-3"
//         >
//           Book Online
//         </a>
//         <a
//           href="#"
//           className="uppercase font-bold text-sm text-blue-700 hover:underline"
//         >
//           More Info
//         </a>
//         <a href="#" className="float-right">
//           <img src="https://img.icons8.com/flat_round/24/000000/share--v1.png" />
//         </a>
//         <a href="#" className="float-right mr-3">
//           <img src="https://img.icons8.com/flat_round/24/000000/hearts.png" />
//         </a>
//       </footer>
//     </div>
//    </Link>
//   );
// };

// export default Card;
import React from 'react'

const Card = () => {
  return (
<div className="flex  px-3 py-3">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
        perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
</div>

  )
}

export default Card
