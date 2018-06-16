enum NodeType {
  TEXT = "text",
  IMAGE = "image"
}

interface NodeBase {
  type: NodeType;
}

interface Text extends NodeBase {
  type: NodeType.TEXT;
  value: string;
}

interface Image extends NodeBase {
  type: NodeType.IMAGE;
  link: string;
}

type Node = Text | Image;

const node: Node[] = [
  { type: NodeType.TEXT, value: "foo" },
  { type: NodeType.IMAGE, link: "https://example.com/foo.png" }
];
