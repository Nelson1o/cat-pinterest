import type { Cat } from "../types";
import { BASE_URL } from "../constants";
import { HEADERS } from "../config";

export const getCatsList = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<Cat[]> => {
  const response = await fetch(
    `${BASE_URL}/images/search?limit=20&page=${pageParam}`,
    {
      headers: HEADERS,
    }
  );

  if (!response.ok) throw new Error("Error!");

  return response.json();
};
