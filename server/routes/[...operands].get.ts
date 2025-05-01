import { SOURCE } from "~/constants/source";
import { getOperandsFromParams } from "~/utils/getOperandsFromParams";
import { isValidPath } from "~/utils/validatePath";

/**
 * We expect the path to conform to the following formula:
 *
 *    m × 10^n
 *
 * Where the 10 is omitted and m is a number
 * and n is a negative number.
 *
 * Example: 5 × 10^-2 represents 0.05
 *
 * We will use the power of n as the first operand in the path:
 *
 *   /n/m
 *
 * Since 10 is always the base, we can omit it from the path.
 *
 * And using the power of n as the first operand, we can order
 * the endpoints in a list so we have results in descending order
 * from more likely to less likely: closer to 1 or to 0.
 *
 * The path will be parsed into an array of operands.
 *
 * Example: 5 × 10^-2 (0.05) can be represented with /2/5
 */
export default defineEventHandler((event) => {
  const { operands } = getRouterParams(event);

  if (!isValidPath(operands)) {
    return {
      statusCode: 400,
      body: {
        message:
          "Invalid path. Please use the format /n/m (e.g. /2/5 for 5 × 10^-2)",
      },
    };
  }

  const [n, m] = getOperandsFromParams({ operands });

  const response = SOURCE[n][m];

  if (!response) {
    return {
      statusCode: 404,
      body: {
        message: "The odds were not in your favour. Please try again.",
      },
    };
  }

  return response;
});
