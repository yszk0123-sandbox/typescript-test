interface Node<T> {
  value: T;
  children?: Array<Node<T>>;
}

export const sampleNode: Node<number> = {
  value: 1,
  children: [
    {
      value: 2
    }
  ]
};

function node<T>(value: T, children?: Array<Node<T>>): Node<T> {
  return {
    value,
    children
  };
}

export const sampleNodeWithHelper: Node<number> = node(1, [node(2)]);
