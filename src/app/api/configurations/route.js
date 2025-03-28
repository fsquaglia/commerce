import { getDocConfig } from "@/utils/firebase/fetchFirebase";

export const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE_MEDIUM);

export async function GET(req) {
  try {
    // Realiza la consulta a Firestore
    const configurations = await getDocConfig();
    if (!configurations) throw new Error("Error obteniendo configuraciones");
    return new Response(JSON.stringify(configurations), { status: 200 });
  } catch (error) {
    console.error("Error obteniendo configuraciones:", error);
    return new Response(
      JSON.stringify({ error: "Error obteniendo configuraciones" }),
      { status: 500 }
    );
  }
}
