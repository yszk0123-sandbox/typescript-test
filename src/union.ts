interface FooState {
  foo: {
    value: number;
  };
}
interface BarState {
  foo: {
    value: string;
  };
  bar: {
    value: string;
  };
}

// $ExpectError
export interface State extends FooState, BarState {}

// export const state: State = {
//   foo: {
//     value: "a"
//   },
//   bar: {
//     value: "b"
//   }
// };
