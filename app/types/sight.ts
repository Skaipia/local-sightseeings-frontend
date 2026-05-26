export type SightT = ISight & {
  category?: string;
  location?: string;
  price?: string;
  interestBy?: string;
  openingHours?: string;
};

type Coordinates = [number, number];

export type SightExtendedT = SightT & {
  facts?: string[];
  historyParagraphs?: string[];
  legends?: string[];
  videos?: { part: string; url: string }[];
  audios?: { part?: string; url: string }[];
  gallery?: { alt?: string; url: string }[];
  map?: { center: Coordinates; zoom?: number; places: Coordinates[] };
  sightPlaces?: SightT[];
  nearby?: SightT[];
  address?: string;
  phoneNumber?: string;
  website?: string;
};
