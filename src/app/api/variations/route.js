import { getNodoRealtime } from "@/utils/firebase/fetchFirebase";

export const revalidate = 0;

export async function GET(req) {
  try {
    // Realiza la consulta a Realtime
    const variations = await getNodoRealtime("variaciones");
    if (!variations) throw new Error("Error obteniendo datos para variaciones");
    return new Response(JSON.stringify(variations), { status: 200 });
  } catch (error) {
    console.error("Error obteniendo variations:", error);
    return new Response(JSON.stringify({}), { status: 500 });
  }
}