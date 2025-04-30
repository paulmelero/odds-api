import { getOperandsFromParams } from "./getOperandsFromParams";

/**
 * @param {boolean} operands Expects a string in the format of /n/m
 */
export const isValidPath = (operands: string) => {
  if (operands.length && operands.includes("/")) {
    const [n, m] = getOperandsFromParams({ operands });
    if (isNaN(n) || isNaN(m)) {
      return false;
    }
    if (n > 0 && m > 0) {
      return true;
    }
  }
  return false;
};
