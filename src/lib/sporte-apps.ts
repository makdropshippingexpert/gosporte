import golfLogo from "@/assets/sporte-golf-logo.png.asset.json";
import basketballLogo from "@/assets/sporte-basketball-logo.png.asset.json";
import dodgeballLogo from "@/assets/sporte-dodgeball-logo.png.asset.json";

const golfImg = golfLogo.url;
const basketballImg = basketballLogo.url;
const dodgeballImg = dodgeballLogo.url;

export type AppStatus = "live" | "coming-soon";

export interface SporteApp {
  name: string;
  sport: string;
  status: AppStatus;
  description: string;
  url: string;
  image?: string;
}

export const apps: SporteApp[] = [
  {
    name: "SportE Golf",
    sport: "golf",
    status: "live",
    description:
      "Run public or private tournaments, leagues, and charity outings — with an optional cash purse skills contest paying out 1st, 2nd, and 3rd.",
    url: "https://app.golf.gosporte.com/",
    image: golfImg,
  },
  {
    name: "SportE Basketball",
    sport: "basketball",
    status: "coming-soon",
    description:
      "Manage basketball tournaments, leagues, teams, and event scheduling.",
    url: "https://app.basketball.gosporte.com/",
    image: basketballImg,
  },
  {
    name: "SportE Dodgeball",
    sport: "dodgeball",
    status: "coming-soon",
    description:
      "Organize dodgeball events, leagues, brackets, and team management.",
    url: "https://app.dodgeball.gosporte.com/",
    image: dodgeballImg,
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
