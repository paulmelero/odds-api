import { Source } from "~~/types";

export const SOURCE = Object.freeze({
  1: {
    5: {
      value: 0.5,
      fraction: "1/2",
      source: "https://en.wikipedia.org/wiki/Fair_coin",
      exampleEvent: "Fair Coin Toss",
      exampleDescription:
        "A fair coin has a 50% chance of landing on each side, meaning it's 1/2 likely to land on heads and 1/2 likely to land on tails.",
    },
  },
  5: {
    6: {
      value: 0.00006535947712418301,
      fraction: "1/15300",
      mantissaRest: 535947712418301,
      source: "https://www.weather.gov/safety/lightning-odds",
      exampleEvent: "Lightning Strike in a lifetime in the US",
      exampleDescription:
        "The odds of being struck by lightning in a given year are about 1 in 1,222,000. This means that over a lifetime (80 years), the odds of being struck are about 1 in 15,300.",
      related: ["/7/8"],
    },
  },
  7: {
    8: {
      mantissaRest: 183306055646482,
      value: 8.183306055646482e-7,
      fraction: "1/1220000",
      source: "https://www.weather.gov/safety/lightning-odds",
      exampleEvent: "Odds of being struck by lightning in a year in the US",
      exampleDescription:
        "The odds of being struck by lightning in a given year are about 1 in 1,222,000.",
      related: ["/5/6"],
    },
  },
}) satisfies Source;
