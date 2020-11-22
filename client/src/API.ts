import axios, { AxiosResponse } from "axios";

// const baseUrl: string = "http://127.0.0.1:7000";

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
