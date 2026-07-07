export type SightT = ISight & {
  category?: string;
  location?: string;
  price?: string;
  interestBy?: string;
  openingHours?: string;
};

type Coordinates = [number, number];

// TODO: SightExtendedT не соответствует ICardResponse из контракта. При подключении бэкенда нужно:
//
// 1. Добавить интерфейс ICardResponse и заменить SightExtendedT на него:
//    interface ICardResponse {
//      generalInfo: IGeneralInfo;
//      map: IMapLocation;
//      facts?: string[];
//      history?: IHistoryBlock;
//      legends?: string[];
//      videoTours?: string[];   // массив URL-строк, не объектов
//      audioGuides?: string[];  // массив URL-строк, не объектов
//      gallery?: string[];      // массив URL-строк, не объектов
//    }
//
// 2. Вложить контактные поля в generalInfo:
//    address (обязательный), openingHours, phone (не phoneNumber), website, events, price
//
// 3. Поле history: заменить historyParagraphs: string[] на IHistoryBlock:
//    interface IHistoryBlock { items: string[]; quote?: string; }
//
// 4. Поля videoTours / audioGuides / gallery: заменить объекты { part, url } на простые string[].
//    Структуру { part, url } можно использовать только на уровне UI (формировать из строк).
//
// 5. Поле map: заменить { center: Coordinates; zoom; places } на IMapLocation { lat: number; lng: number }.
//    zoom и places (для мультиточечного отображения) — добавить как UI-only расширение поверх IMapLocation.
export type SightExtendedT = SightT & {
  facts?: string[];
  historyParagraphs?: string[]; // TODO: переименовать в history и изменить тип на IHistoryBlock согласно контракту
  legends?: string[];
  videoTours?: { part: string; url: string }[]; // TODO: заменить на videoTours?: string[] согласно контракту
  audios?: { part?: string; url: string }[]; // TODO: заменить на audioGuides?: string[] согласно контракту
  gallery?: { alt?: string; url: string }[]; // TODO: заменить на gallery?: string[] согласно контракту
  map?: { center: Coordinates; zoom?: number; places: Coordinates[] }; // TODO: заменить на IMapLocation { lat, lng } согласно контракту
  sightPlaces?: SightT[];
  nearby?: SightT[];
  address?: string; // TODO: перенести в generalInfo, сделать обязательным
  phone?: string; // TODO: переименовать в phone и перенести в generalInfo согласно контракту
  website?: string; // TODO: перенести в generalInfo согласно контракту
  // TODO: добавить поле events?: string в generalInfo согласно контракту
};
