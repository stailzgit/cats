import { ICat } from "../../../models/ICat";

export interface ContactsState {
  cats: ICat[];
  isLoading: boolean;
  error: string;
  // favorives: string[];
}

export enum CatsActionEnum {
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
  GET_CATS = "GET_CATS",
  ADD_CATS = "ADD_CATS",
  TOGGLE_FAVORITES = "TOGGLE_FAVORITES",
  // DEL_FROM_FAVORITES = "DEL_FROM_FAVORITES",
}

export interface SetErrorAction {
  type: CatsActionEnum.SET_ERROR;
  payload: string;
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

// export interface DelFromFavoritesAction {
//   type: CatsActionEnum.DEL_FROM_FAVORITES;
//   payload: string;
// }

export type CatsActions =
  | SetErrorAction
  | SetIsLoadingAction
  | GetCatsAction
  | AddCatsAction
  | ToggleFavoritesAction;
