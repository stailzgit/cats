import { ContactsState, CatsActionEnum, CatsActions } from "./types";
import { ICat } from "../../../models/ICat";

const initialState: ContactsState = {
  error: "",
  isLoading: false,
  cats: [] as ICat[],
  totalPages: 1,
  limit: 20,
  page: 1,
};

export default function contactsReducer(
  state = initialState,
  action: CatsActions
): ContactsState {
  switch (action.type) {
    case CatsActionEnum.SET_ERROR:
      return { ...state, error: action.payload };

    case CatsActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case CatsActionEnum.ADD_CATS:
      return { ...state, cats: [...state.cats, ...action.payload] };

    case CatsActionEnum.GET_CATS:
      return { ...state, cats: action.payload };

    case CatsActionEnum.SET_PAGE:
      return { ...state, page: action.payload };

    case CatsActionEnum.SET_TOTAL_PAGES:
      const totalItemCount = action.payload;
      const totalPages = Math.ceil(totalItemCount / state.limit);
      return { ...state, totalPages: totalPages };

    case CatsActionEnum.TOGGLE_FAVORITES:
      return {
        ...state,
        cats: state.cats.map((cat) =>
          cat.id === action.payload
            ? { ...cat, isInFavorites: !cat.isInFavorites }
            : cat
        ),
      };

    default:
      return state;
  }
}
