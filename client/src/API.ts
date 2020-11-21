import axios, { AxiosResponse } from "axios";

// const baseUrl: string = "http://localhost:7000";
const baseUrl: string = "http://40.79.17.32:7000";

export const getItems = async (selected: String) => {
  const params = { selected };

  try {
    const todos: AxiosResponse = await axios.get("/get-items", {
      params,
    });
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};
