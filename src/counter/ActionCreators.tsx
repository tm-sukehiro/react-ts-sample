import {MyAction, ActionTypes, IAmount, IMessageJson} from "./Models";
import * as axios from "axios";
import {getRequest} from "../utils/HttpClient";

export function fetchAmountAction(forceFail: boolean) {
  return (dispatch: (action: MyAction) => any) => {

    function failCB(msg: IMessageJson): void {
      dispatch({type: ActionTypes.FETCH_FAIL, msg: msg});
    }

    function successCB(amount: IAmount): void {
      const action = {type: ActionTypes.FETCH_SUCCESS, amountJson: amount};
      dispatch(action);
    }

    dispatch({type: ActionTypes.FETCH_REQUEST});
    let url = '';
    if (forceFail) {
      url = '/api/countFail';
    } else {
      url = '/api/count';
    }
    return getRequest<IAmount>(url, successCB, failCB);
  }
}

export function incrementAction(amount: number): MyAction {
  return {type: ActionTypes.INCREMENT, amount: amount}
}

export function decrementAction(amount: number): MyAction {
  return {type: ActionTypes.DECREMENT, amount: amount}
}