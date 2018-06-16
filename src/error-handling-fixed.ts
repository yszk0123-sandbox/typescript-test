// Workaround for https://github.com/bjyoungblood/es6-error/issues/40
declare class _ExtendableError extends Error {}
const ExtendableError: typeof _ExtendableError = require("es6-error");

class CustomErrorA extends ExtendableError {
  a = "a";
}

class CustomErrorB extends ExtendableError {
  b = "b";
}

const foo = () => {
  try {
    throw new CustomErrorA();
  } catch (error) {
    console.log(">>>>>>>>>>>>>>>>> foo");
    if (error instanceof CustomErrorA) {
      console.trace("CustomErrorA", error.a);
      error.message;
    } else if (error instanceof CustomErrorB) {
      console.trace("CustomErrorA", error.b);
    } else {
      throw error;
    }
  }
};

try {
  foo();
} catch (error) {
  console.log(">>>>>>>>>>>>>>>>> top");
  console.trace(error);
}
