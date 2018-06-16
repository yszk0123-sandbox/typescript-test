interface A {
  name: string;
}

// @ts-ignore
interface B extends A {
  name: number;
}

const b: B = { name: 1 }
