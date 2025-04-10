"use client";
import { links } from "@/utils/linksDashboard";
import { usePathname } from "next/navigation";

export default function HeaderDashboard() {
  const pathname = usePathname();
  const head = links.find((link) => link.href === pathname);

  return (
    head && (
      <div className="flex flex-col justify-center items-center text-center w-full md:w-3/4 gap-2">
        <h2 className="font-sans underline leading-tight text-blue-600 leading-relaxed antialiased text-lg md:text-2xl font-semibold">
          {head ? head.head?.title : "Título de sección"}
        </h2>
        <div className="text-xs md:text-sm">
          <p>{head ? head.head?.description : "Detalle de sección"}</p>
        </div>
      </div>
    )
  );
}
