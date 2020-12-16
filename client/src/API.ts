import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://127.0.0.1:7000";

export const getItems = async (data: any) => {
  const params = { selected: data.dataSet, version: data.version };

  try {
    const res: AxiosResponse = await axios.get(baseUrl + "/get-items", {
      params,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPlotItems = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + "/get-plot");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCartItems = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + "/get-cart", {
      params,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSystems = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + "/get-systems");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSystemVersion = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get(
      baseUrl + "/get-system-version",
      { params }
    );
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
