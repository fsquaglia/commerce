import React from "react";
import Image from "next/image";

function CardComponent({ id, name, img, onclickCard }) {
  return (
    <div
      className="relative bg-gray-100 w-28 h-40 shadow hover:shadow-2xl hover:scale-105 transition-transform transform cursor-pointer flex flex-col overflow-hidden"
      onClick={() => onclickCard(id)}
    >
      {img ? (
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
      <div className="relative z-20 p-2 mt-auto text-white">
        <span className="block text-xs">{name || "¿Categoría?"}</span>
      </div>
      {id === "newCategory" && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-55">
            <span className="text-black text-2xl">+</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardComponent;