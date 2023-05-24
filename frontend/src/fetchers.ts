import type { BetankandeResponse } from "./types/betankande";

export const getBetankande = async (): Promise<BetankandeResponse> => {
  const url =
    "https://data.riksdagen.se/dokumentlista/?doktyp=bet&a=s&sort=datum&sortorder=desc&utformat=json&p=1";
  const res = await fetch(url);
  return res.json();
};
