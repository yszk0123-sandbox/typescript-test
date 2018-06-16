interface InnerTreeArray<T> extends Array<InnerTreeArray<T> | T> {}

type Tree<T> = T | InnerTreeArray<T>;

type NumberTree = Tree<number>;

export const numberTree: NumberTree = [1, [2, []]];
