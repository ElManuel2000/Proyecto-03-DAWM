import { get, ref } from "firebase/database";
import { database } from "../firebase/firebase";
import type { Chocolate } from "../types/Chocolate";

export async function obtenerReseñas( ): Promise<Chocolate[] | null> {

  const referencia = ref(database, `/`);

  const snapshot = await get(referencia);

  if (snapshot.exists()) {
    return snapshot.val() as Chocolate[];
  }

  return null;
}