import api from "@/config/api";

export async function getComicDetails(id: number) {
  try {
    const { data } = await api
      .get(`/public/comics?id=${id}`)
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
export async function getCreators(id: number) {
  try {
    const { data } = await api
      .get(`/public/comics/${id}/creators`)
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
