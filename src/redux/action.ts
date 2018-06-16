import { DECREMENT, INCREMENT } from "./actionTypes";

interface IncrementPayload {
  value: number;
}
export interface Increment {
  type: typeof INCREMENT;
  payload: IncrementPayload;
}

interface DecrementPayload {
  value: string;
}
export interface Decrement {
  type: typeof DECREMENT;
  payload: DecrementPayload;
}

export type Action = Increment | Decrement;
