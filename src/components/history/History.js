"use client";
import { useState, useMemo } from "react";

const circlesData = [
  {
    id: "historia1",
    bgColor: "bg-red-700",
    measure: 150,
  },
  {
    id: "historia2",
    bgColor: "bg-lime-700",
    measure: 180,
  },
  {
    id: "historia3",
    bgColor: "bg-amber-600",
    measure: 220,
  },
  {
    id: "historia4",
    bgColor: "bg-yellow-500",
    measure: 130,
  },
];

const Circle = ({ id, text, bgColor, onClick, measure }) => (
  <div
    onClick={() => onClick(id)}
    className={`flex items-center justify-center ${bgColor} text-white text-xl font-bold rounded-full shadow-2xl transition-transform transform hover:scale-110 cursor-pointer animate-pulse`}
    style={{ width: `${measure}px`, height: `${measure}px` }}
  >
    {text}
  </div>
);

export default function History({
  historia = {
    historia1: {
      descripcion: "Nuestra tienda nació...",
      imagen: "",
      titulo: "Historia",
      visible: true,
    },
    historia2: {
      descripcion: "Nuestra misión es...",
      imagen: "",
      titulo: "Misión",
      visible: true,
    },
    historia3: {
      descripcion: "Nuestra visión es...",
      imagen: "",
      titulo: "Visión",
      visible: true,
    },
    historia4: {
      descripcion: "Nuestros valores se alinean...",
      imagen: "",
      titulo: "Valores",
      visible: true,
    },
  },
}) {
  const [selectedCircle, setSelectedCircle] = useState(null);

  // Combina historia con circlesData
  const combinedData = useMemo(() => {
    return Object.keys(historia).map((key) => {
      const circle = circlesData.find((c) => c.id === key);
      return {
        id: key,
        ...historia[key],
        bgColor: circle ? circle.bgColor : "bg-gray-400", // Color de respaldo
        measure: circle ? circle.measure : 100, // Medida de respaldo
      };
    });
  }, [historia]);

  const handleCircleClick = (id) => {
    const selected = combinedData.find((circle) => circle.id === id);
    setSelectedCircle(selected);
  };

  const closeModal = () => {
    setSelectedCircle(null);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-10 pb-20">
      <div className="h-24"></div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {combinedData.map((circle) => (
          <Circle
            key={circle.id}
            id={circle.id}
            text={circle.titulo}
            measure={circle.measure}
            bgColor={circle.bgColor}
            onClick={handleCircleClick}
          />
        ))}
      </div>

      {selectedCircle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="relative bg-white p-8 rounded-lg shadow-xl w-[30rem] max-w-full flex flex-col"
            style={{
              backgroundImage: selectedCircle.imagen
                ? `url(${selectedCircle.imagen})`
                : "none", // Opción para manejar la ausencia de imagen
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              backgroundColor: selectedCircle.imagen ? "transparent" : "gray", // Color de respaldo si no hay imagen
            }}
          >
            {/* Overlay para asegurar la legibilidad del texto */}
            <div
              className={`absolute inset-0 ${
                selectedCircle.imagen ? "bg-black bg-opacity-60" : ""
              } rounded-lg`}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {selectedCircle.titulo}
              </h2>
              <p className="text-sm text-center">
                {selectedCircle.descripcion}
              </p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
