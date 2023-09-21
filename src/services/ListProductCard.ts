import api from "@/config/api";

export async function getComicsList(offset: number) {
  try {
    const { data } = await api
      .get(`/public/comics?offset=${offset}`)
      .then((response) => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        throw err;
      });
    return data;
  } catch (error) {
    // handle error
    throw error;
  }
}
