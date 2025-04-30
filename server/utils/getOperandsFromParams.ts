export const getOperandsFromParams = (params: { operands: string }) => {
  const { operands } = params;
  const [n, m] = operands.split("/").map((x) => parseInt(x));
  return [n, m];
};
