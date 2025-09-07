export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: ReadonlyArray<string>;
  stack?: ReadonlyArray<string>;
};
