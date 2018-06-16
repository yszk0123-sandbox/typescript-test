import { Type, XandY, XorY } from "./interface";

export const xory: XorY = { type: Type.X, x: 1 };
export const xandy: XandY = { type: Type.X, x: 2, y: "aaa" };
xandy.type;
