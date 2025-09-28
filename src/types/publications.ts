export type Publication = {
  title: string;
  venue: string;
  date: string;
  location: string;
  authors: string;
  summary: string;
  link?: string;
};

export type ConferenceEntry = {
  event: string;
  date: string;
  location: string;
  role: "Speaker" | "Panelist" | "Attendee" | string;
  talkTitle?: string;
  talkDescription?: string;
  link?: string;
};
