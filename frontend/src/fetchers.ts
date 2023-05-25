import type { BetankandeResponse } from "./types/betankande";

export const getBetankande = async (page = 1): Promise<BetankandeResponse> => {
  const url = `https://data.riksdagen.se/dokumentlista/?doktyp=bet&a=s&sort=datum&sortorder=desc&utformat=json&p=${page}`;
  const res = await fetch(url);
  return res.json();
};
