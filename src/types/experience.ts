export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  orgKind?: "company" | "university";
  period: string;
  location: string;
  summary: ReadonlyArray<string>;
  stack?: ReadonlyArray<string>;
};
