export type ProjectAttachment = {
  title: string;
  href: string;
  bytes?: number;
  lastModified?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  type: "personal" | "university" | "freelance";
  timestamp: string;
  siteUrl?: string;
  repoUrl?: string;
  description: string;
  summary?: string;
  tags?: ReadonlyArray<string>;
  attachments?: ReadonlyArray<ProjectAttachment>;
};
