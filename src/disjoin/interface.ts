export enum Type {
  X = "X",
  Y = "Y"
}
interface Base {}
interface X extends Base {
  type: Type.X;
  x: number;
}
interface Y extends Base {
  type: Type.Y;
  y: string;
}
export type XorY = X | Y;
export type XandY = X & Y;
export interface XextendY extends X, Y {}
