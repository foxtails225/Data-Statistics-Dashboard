import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:7000";

export const getItems = async (selected: String) => {
  const params = { selected };

  try {
    const todos: AxiosResponse = await axios.get(baseUrl + "/get-items", {
      params,
    });
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};
