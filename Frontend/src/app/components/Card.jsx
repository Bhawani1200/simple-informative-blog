"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { listInformations } from "../services/InformationService";

const Card = () => {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    listInformations()
      .then((response) => {
        setInformation(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <Image
          className="w-full"
           src="https://t4.ftcdn.net/jpg/01/04/78/75/360_F_104787586_63vz1PkylLEfSfZ08dqTnqJqlqdq0eXx.jpg"
           width={200}
           height={200}
          alt="Sunset in the mountains"
        /> */}
        <div className="px-6 py-4">
          {information.map((information) => (
            <div className="font-bold text-xl mb-2">
              <tr key={information.id}>
                <td> {information.title}</td>
              </tr>
            </div>
          ))}
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
