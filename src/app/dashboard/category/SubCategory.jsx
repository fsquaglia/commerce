"use client";

import React, { useEffect, useState } from "react";
import InputCustom from "@/ui/InputCustom";
import ButtonDashboard from "@/ui/ButtonDashboard";
import { createSubcollection } from "@/utils/firebase/fetchFirebase";
import Swal from "sweetalert2";
import { revalidateSomePath } from "@/utils/actions/actions";

function SubCategory({ categoryObject, reloadData }) {
  const [newSubCat, setNewSubCat] = useState("");
  const [subCatArray, setSubCatArray] = useState([]);

  useEffect(() => {
    if (categoryObject?.docData?.subcategorias) {
      // Si hay subcategorías, ordenar alfabéticamente sin distinguir mayúsculas y minúsculas
      setSubCatArray(
        [...categoryObject.docData.subcategorias].sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        )
      );
    } else {
      // Si no hay subcategorías, establecer el array como vacío
      setSubCatArray([]);
    }
  }, [categoryObject]);

  const handleAddSubCategory = async () => {
    try {
      if (newSubCat.trim()) {
        await createSubcollection(categoryObject.docID, newSubCat, [
          ...subCatArray,
          newSubCat,
        ]);
        setSubCatArray([...subCatArray, newSubCat]);
        setNewSubCat(""); // Limpiar el input después de agregar
        reloadData(); //recargar la lista de categorías y demás
        await revalidateSomePath("/categories");
      }
    } catch (error) {
      console.error("Error! ", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo está mal...",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onChangeValue = (e) => {
    //a futuro para edición de subcategorías existentes
    return null;
  };

  return (
    <div className="columns-1">
      {categoryObject.docData.id && (
        <h3 className="text-blue-600 my-2">
          {`Subcategorías de ${categoryObject.docData.id}`}
        </h3>
      )}
      {categoryObject.docID === "newCategory" ? (
        <div className="my-2">
          <span>Selecciona una categoría</span>
        </div>
      ) : subCatArray && subCatArray.length > 0 ? (
        subCatArray.map((subCat, index) => (
          <div className="flex flex-col" key={index}>
            <InputCustom
              labelText=""
              name={subCat}
              inputValue={subCat}
              showCharLimits={false}
              onChange={onChangeValue}
            />
          </div>
        ))
      ) : (
        "Crea una subcategoría"
      )}
      {categoryObject.docID != "newCategory" && (
        <div className="flex flex-col my-2">
          <InputCustom
            labelText=""
            name="newSubCategory"
            inputValue={newSubCat}
            onChange={(e) => setNewSubCat(e.target.value)}
            placeHolder="Nueva Subcategoría"
            charLimit={30}
          />
          <ButtonDashboard
            onclick={handleAddSubCategory}
            textButton={"Agregar Subcategoría"}
            disabled={subCatArray.some(
              (subc) => subc.toLowerCase() === newSubCat.toLowerCase()
            )}
          />
        </div>
      )}
    </div>
  );
}

export default SubCategory;
