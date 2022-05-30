import axios, { AxiosResponse } from "axios";
import { ICat } from "../models/ICat";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
});

export default class CatsService {
  static async getAllCats(
    limit = 10,
    page = 1
  ): Promise<AxiosResponse<ICat[]>> {
    const response = await instance.get("images/search", {
      params: {
        limit: limit,
        page: page,
      },
    });
    return response;
  }
}
