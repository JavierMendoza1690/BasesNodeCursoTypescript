// Importaciones
import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    //* Method 1: http request with fetch
    // const resp = await fetch( url );
    // const data = await resp.json();
    // return data;

    //* Method 2: http request with axios
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url: any, body: any) => {
    throw new Error("Method not implemented.");
  },
  put: async (url: any, body: any) => {
    throw new Error("Method not implemented.");
  },
  delete: async (url: any, body: any) => {
    throw new Error("Method not implemented.");
  },
};
