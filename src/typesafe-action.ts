import { ActionType, createStandardAction, getType } from "typesafe-actions";

const increment = createStandardAction("app/INCREMENT")<number>();
const decrement = createStandardAction("app/DECREMENT")<number>();

increment(10);
decrement(10);

type Handler<T> = { [Key in keyof T]: T[Key] };

const inc = getType(increment);
const CountAction = { increment, decrement };
// type CountAction = ActionType<typeof increment | typeof decrement>;
type CountAction = ActionType<typeof CountAction>;
type CountHandler = Handler<typeof CountAction>;

CountAction.increment(1);
interface Props {
  onIncrement: CountHandler["increment"];
}
