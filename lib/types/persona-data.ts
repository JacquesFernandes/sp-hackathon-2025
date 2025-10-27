import {SearchLink} from "@/lib/types/search-link";

type Name = string;

type PersonalisationMessage = string;

type SummaryRag = string;

type Links = SearchLink[];

export type PersonaData = {
  name: Name;
  personalisationMessage: PersonalisationMessage;
  summaryRag: SummaryRag;
  links: Links;
};