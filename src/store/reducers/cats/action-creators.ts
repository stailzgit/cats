import { AppDispatch } from "../../store";
import {
  CatsActionEnum,
  SetIsLoadingAction,
  SetErrorAction,
  CatsActions,
  ToggleFavoritesAction,
  AddCatsAction,
} from "./types";
import { ICat } from "../../../models/ICat";
import CatsService from "../../../api/catsService";

export const CatsActionCreators = {
  addCats: (payload: ICat[]): AddCatsAction => ({
    type: CatsActionEnum.ADD_CATS,
    payload,
  }),
  toggleFavorites: (payload: string): ToggleFavoritesAction => ({
    type: CatsActionEnum.TOGGLE_FAVORITES,
    payload,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: CatsActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: CatsActionEnum.SET_ERROR,
    payload,
  }),
  fetchCats: (limit: number, page: number) => async (dispatch: AppDispatch) => {
    dispatch(CatsActionCreators.setIsLoading(true));
    try {
      const { data: cats } = await CatsService.getAllCats(limit, page);
      dispatch(CatsActionCreators.addCats(cats));
    } catch (e) {
      dispatch(CatsActionCreators.setError("Cats error"));
    } finally {
      dispatch(CatsActionCreators.setIsLoading(false));
    }
  },
};
