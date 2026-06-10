export type AppStatus = "live" | "coming-soon";

export interface SporteApp {
  name: string;
  sport: string;
  status: AppStatus;
  description: string;
  url: string;
}

export const apps: SporteApp[] = [
  {
    name: "SportE Golf",
    sport: "golf",
    status: "live",
    description:
      "Create golf events, organize players, manage tournaments, and simplify event planning.",
    url: "https://app.golf.gosporte.com/",
  },
  {
    name: "SportE Basketball",
    sport: "basketball",
    status: "coming-soon",
    description:
      "Manage basketball tournaments, leagues, teams, and event scheduling.",
    url: "https://app.basketball.gosporte.com/",
  },
  {
    name: "SportE Dodgeball",
    sport: "dodgeball",
    status: "coming-soon",
    description:
      "Organize dodgeball events, leagues, brackets, and team management.",
    url: "https://app.dodgeball.gosporte.com/",
  },
];

export const futureSports = [
  "Pickleball",
  "Volleyball",
  "Tennis",
  "Soccer",
  "Softball",
  "Cornhole",
  "Disc Golf",
  "Custom Event Platforms",
];

export const GOLF_URL = "https://app.golf.gosporte.com/";
