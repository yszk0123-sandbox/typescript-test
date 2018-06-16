type Foo<T> = [T] extends [never] ? "1" : "2";

export type X = Foo<never>;
