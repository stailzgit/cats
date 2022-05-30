import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { CatsActionCreators } from "../store/reducers/cats/action-creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CatsActionCreators, dispatch);
};
