type OddsInfo = {
  value: number;
  fraction: string;
  source: string;
  exampleEvent: string;
  exampleDescription: string;
  mantissaRest?: number;
  related?: string[];
};

type OneOrMany<T> = T | T[];

export type Source = {
  [n: number]: {
    [m: number]: OneOrMany<OddsInfo>;
  };
};
