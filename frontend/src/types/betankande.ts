export interface BetankandeResponse {
  dokumentlista: Dokumentlista;
}

export interface Dokumentlista {
  "@ms":         string;
  "@version":    string;
  "@q":          string;
  "@varning":    string;
  "@datum":      Date;
  "@nasta_sida": string;
  "@sida":       string;
  "@sidor":      string;
  "@traff_fran": string;
  "@traff_till": string;
  "@traffar":    string;
  "@dPre":       string;
  "@dSol":       string;
  "@dDt":        string;
  "@dR":         string;
  facettlista:   null;
  dokument:      Dokument[];
}

export interface Dokument {
  traff:                  string;
  domain:                 Domain;
  database:               Avdelning;
  datum:                  Date;
  id:                     string;
  rdrest:                 null;
  slutdatum:              string;
  rddata:                 null;
  plats:                  string;
  klockslag:              string;
  publicerad:             Date;
  systemdatum:            Date;
  undertitel:             string;
  kalla:                  Kalla;
  kall_id:                string;
  dok_id:                 string;
  dokumentformat:         string;
  dokument_url_text:      string;
  dokument_url_html:      string;
  dokumentstatus_url_xml: string;
  inlamnad:               string;
  motionstid:             string;
  tilldelat:              string;
  lang:                   string;
  url:                    string;
  relurl:                 string;
  titel:                  string;
  rm:                     string;
  organ:                  Organ;
  relaterat_id:           string;
  doktyp:                 DoktypEnum;
  typ:                    DoktypEnum;
  subtyp:                 Subtyp;
  beteckning:             string;
  tempbeteckning:         string;
  nummer:                 string;
  status:                 Status;
  score:                  string;
  sokdata:                Sokdata;
  summary:                string;
  notisrubrik:            string;
  notis:                  string;
  dokintressent:          null;
  filbilaga:              Filbilaga;
  avdelning:              Avdelning;
  struktur:               string;
  audio:                  string;
  video:                  string;
  debattgrupp:            string;
  debattdag:              string;
  beslutsdag:             string;
  beredningsdag:          string;
  justeringsdag:          string;
  beslutad:               string;
  debattsekunder:         string;
  ardometyp:              string;
  reservationer:          string;
  debatt:                 null;
  debattnamn:             Debattnamn;
  dokumentnamn:           Dokumentnamn;
}

export enum Avdelning {
  Dokument = "dokument",
}

export enum Debattnamn {
  DebattOmFörslag = "Debatt om förslag",
}

export enum DoktypEnum {
  Bet = "bet",
}

export enum Dokumentnamn {
  Betänkande = "Betänkande",
  Utlåtande = "Utlåtande",
}

export enum Domain {
  Rdwebb = "rdwebb",
}

export interface Filbilaga {
  fil: Fil[];
}

export interface Fil {
  typ:     FilTyp;
  namn:    string;
  storlek: string;
  url:     string;
}

export enum FilTyp {
  PDF = "pdf",
}

export enum Kalla {
  Digitalisering = "digitalisering",
}

export enum Organ {
  Bevu = "Bevu",
}

export interface Sokdata {
  titel:                 string;
  undertitel:            string;
  soktyp:                string;
  statusrad:             Statusrad;
  brodsmula:             string;
  parti_kod:             string;
  parti_namn:            string;
  parti_website_url:     string;
  parti_website_namn:    string;
  parti_epost:           string;
  parti_telefon:         string;
  parti_logotyp_img_id:  string;
  parti_logotyp_img_url: string;
  parti_logotyp_img_alt: string;
  parti_mandat:          string;
}

export enum Statusrad {
  Br = "\n<br />\n\t",
}

export enum Status {
  Ocr = "ocr",
}

export enum Subtyp {
  Empty = "",
  Mem = "mem",
  Utl = "utl",
}
