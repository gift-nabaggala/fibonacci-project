export const fib = (n) => {
  let memory = {};

  if (memory[n] !== undefined) {
    return memory[n];
  }

  if (n < 2) {
    memory[n] = n;

    return n;
  }

  let result = fib(n - 1) + fib(n - 2);

  memory[n] = result;

  return result;
};
