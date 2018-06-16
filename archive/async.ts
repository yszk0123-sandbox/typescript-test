
export async function foo() {
  const result = await Promise.resolve('ok');
  return `Result: ${result}`;
}
