// class CustomErrorA extends Error { a = 'a' }
//
// class CustomErrorB extends Error { b = 'b' }
//
// const foo = () => {
//   try {
//     throw new CustomErrorA();
//   } catch (error) {
//     console.log('>>>>>>>>>>>>>>>>> foo');
//     if (error instanceof CustomErrorA) {
//       console.trace('CustomErrorA', error.a)
//     } else if (error instanceof CustomErrorB) {
//       console.trace('CustomErrorA', error.b)
//     } else {
//       throw error;
//     }
//   }
// };
//
// try {
//   foo();
// } catch (error) {
//   console.log('>>>>>>>>>>>>>>>>> top');
//   console.trace(error);
// }
