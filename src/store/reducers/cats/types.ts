import { ICat } from "../../../models/ICat";

export interface ContactsState {
  cats: ICat[];
  isLoading: boolean;
  error: string;
  totalPages: number;
  limit: number;
  page: number;
}

export enum CatsActionEnum {
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
  GET_CATS = "GET_CATS",
  ADD_CATS = "ADD_CATS",
  TOGGLE_FAVORITES = "TOGGLE_FAVORITES",
  SET_TOTAL_PAGES = "SET_TOTAL_PAGES",
  SET_PAGE = "SET_PAGE",
}

export interface SetErrorAction {
  type: CatsActionEnum.SET_ERROR;
  payload: string;
}

export interface SetTotalPages {
  type: CatsActionEnum.SET_TOTAL_PAGES;
  payload: number;
}

export interface SetPage {
  type: CatsActionEnum.SET_PAGE;
  payload: number;
}

export interface SetIsLoadingAction {
  type: CatsActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface GetCatsAction {
  type: CatsActionEnum.GET_CATS;
  payload: ICat[];
}

export interface AddCatsAction {
  type: CatsActionEnum.ADD_CATS;
  payload: ICat[];
}

export interface ToggleFavoritesAction {
  type: CatsActionEnum.TOGGLE_FAVORITES;
  payload: string;
}

export type CatsActions =
  | SetErrorAction
  | SetIsLoadingAction
  | GetCatsAction
  | AddCatsAction
  | ToggleFavoritesAction
  | SetTotalPages
  | SetPage;
