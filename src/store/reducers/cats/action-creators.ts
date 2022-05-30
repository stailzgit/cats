import { AppDispatch } from "../../store";
import { ICat } from "../../../models/ICat";
import CatsService from "../../../api/catsService";
import {
  CatsActionEnum,
  SetIsLoadingAction,
  SetErrorAction,
  ToggleFavoritesAction,
  AddCatsAction,
  SetTotalPages,
  SetPage,
} from "./types";

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
  setTotalPages: (payload: number): SetTotalPages => ({
    type: CatsActionEnum.SET_TOTAL_PAGES,
    payload,
  }),
  setPage: (payload: number): SetPage => ({
    type: CatsActionEnum.SET_PAGE,
    payload,
  }),
  fetchCats: (limit: number, page: number) => async (dispatch: AppDispatch) => {
    dispatch(CatsActionCreators.setIsLoading(true));
    try {
      const { data: cats, headers } = await CatsService.getAllCats(limit, page);
      dispatch(CatsActionCreators.addCats(cats));
      const totalCountCats = headers["pagination-count"];
      dispatch(CatsActionCreators.setTotalPages(+totalCountCats));
    } catch (e) {
      dispatch(CatsActionCreators.setError("Cats error"));
    } finally {
      dispatch(CatsActionCreators.setIsLoading(false));
    }
  },
};
