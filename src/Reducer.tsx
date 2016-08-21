import {GlobalState, MyAction, ActionTypes} from "./Models";

const initialState: GlobalState = {num: 0}

export function counter(state: GlobalState = initialState, action: MyAction): GlobalState {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {num: state.num + action.amount};
    case ActionTypes.DECREMENT:
      return {num: state.num - action.amount};
    default:
      return state
  }
}