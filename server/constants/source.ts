type OddsInfo = {
  form: string;
  value: number;
  source: string;
  exampleEvent: string;
  exampleDescription: string;
};

type OneOrMany<T> = T | T[];

type Source = {
  [key: number]: {
    [key: number]: OneOrMany<OddsInfo>;
  };
};

export const SOURCE: Source = {
  1: {
    5: {
      form: "5 × 10^-1",
      value: 0.5,
      source: "https://www.google.com/search?q=5+tenths+odds",
      exampleEvent: "Fair Coin Toss",
      exampleDescription:
        "A fair coin has a 50% chance of landing on each side, meaning it's 1/2 likely to land on heads and 1/2 likely to land on tails.",
    },
  },
};
