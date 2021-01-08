import axios, { AxiosResponse } from 'axios';
import { baseUrl } from './constants';

export const getItems = async (params: any) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-items', { params });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPlotItems = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-plot');
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCartItems = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-cart', { params });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSystems = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-systems');
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSystemVersion = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-system-version', {
      params
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFileId = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-file-id', { params });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getModifySystems = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-modify-systems');
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getModifyVersions = async (params: { [key: string]: number | string }) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-modify-versions', {
      params
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getModifyAttrVersions = async (params: { [key: string]: number }) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-modify-attr-versions', {
      params
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getModifyModels = async (params: { [key: string]: number }) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/get-modify-models', {
      params
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const changeDB = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/change-db', {
      params
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteRecord = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/delete-record', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAll = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/delete-all', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const migrate = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/migrate', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const createSystem = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/create-system', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const createVersion = async (params: { [key: string]: number | string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/create-version', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const createModel = async (params: { [key: string]: number | string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/create-model', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const processing = async (formData: FormData) => {
  try {
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    const res: AxiosResponse = await axios.post(
      baseUrl + '/processing',
      formData,
      config
    );
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
