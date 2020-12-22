import axios, { AxiosResponse } from "axios";

// const baseUrl: string = "http://127.0.0.1:7000";

export const getItems = async (params: any) => {
  try {
    const res: AxiosResponse = await axios.get("/get-items", {
      params,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPlotItems = async () => {
  try {
    const res: AxiosResponse = await axios.get("/get-plot");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCartItems = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get("/get-cart", {
      params,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSystems = async () => {
  try {
    const res: AxiosResponse = await axios.get("/get-systems");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSystemVersion = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get(
      "/get-system-version",
      { params }
    );
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFileId = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get("/get-file-id", {
      params,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
