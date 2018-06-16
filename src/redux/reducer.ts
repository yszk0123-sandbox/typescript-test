import { Action } from "./action";
import { INCREMENT } from "./actionTypes";

interface State {
  value: number;
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case INCREMENT: {
      return {
        value: state.value + action.payload.value
      };
    }
    case DECREMENT: {
      return {
        value: state.value + action.payload.value
      };
    }
    default:
      return state;
  }
}
