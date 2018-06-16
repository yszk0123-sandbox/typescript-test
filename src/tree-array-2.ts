type Pair<A, B> = [A, B];
interface Tree<T> extends Pair<T, Array<Tree<T> | T>> {}

type NumberTree = Tree<number>;

export const numberTree: NumberTree = [1, [2, [3, [1, 2, [1, []], 3]]]];
export const numberTree2: NumberTree = [1, [[3, []], [3, [6, [3, []], 3, 8]]]];
