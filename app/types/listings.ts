// Респонс листинга достопримечательностей

interface IListingResponse {
    sights: ISight[]
    page: IPage;
}

interface ISight {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    location: string;
}

interface IPage {
    limit: number;
    offset: number;
    count: number;
}

// Реквест листинга достопримечательностей

// TODO: все поля кроме page должны быть опциональными согласно контракту:
//   filters?: Record<ESightsFilter, string[]>
//   searchQuery?: string;
//   sortType?: ESortType;
interface IRequest {
    filters: Record<ESightsFilter, string[]> // keys из IOption
    searchQuery: string;
    sortType: ESortType;
    page: IPage;
}

enum ESortType {
    Popularity = "popularity",
    Rating = "rating"
}

// TODO: задублированный IPage конфликтует с первым — TypeScript мержит оба объявления,
// из-за чего поле count (из респонса) ошибочно попадает в реквест-тип.
// Нужно либо разделить на IPageRequest и IPageResponse, либо удалить этот дубль.
interface IPage {
    offset: number;
    count: number;
}

enum ESightsFilter {
    Location = 'location',
    InterestBy = 'interestBy',
    OpeningHours = 'openingHours',
    Category = 'category',
    Price = 'price',
}


// Респонс фильтров достопримечательностей/маршрутов

interface FiltersResponse {
    filters: IFilters[];
}

interface IFilters {
    id: ESightsFilter;
    name: string;
    type: EFilterType;
    options: IOptions[];
}

interface IOptions {
    key: string;
    label: string;
}

enum EFilterType {
    Checkbox = 'checkbox',
}

// TODO: все интерфейсы и енамы в этом файле не экспортированы

// Респонс маршрутов

// interface IListingResponse {
//     routes: IRoute[]
//     page: IPage;
// }

// interface IPage {
//     limit: number;
//     offset: number;
//     count: number;
// }

// interface IRoute {
//     title: string;
//     routeLength: string;
//     locomotion: string;
//     city: string;
//     imageUrl: string;
// }


// Реквест маршрутов

// interface IRequest {
//     filters: Record<ERoutesFilter, string[]> // keys из IOption
//     searchQuery: string;
//     sortType: ESortType;
//     page: IPage;
// }

// enum ERoutesFilter {
//     RouteLength = 'routeLength',
//     Locomotion = 'locomotion',
//     InterestBy = 'interestBy',
//     Location = 'location',
//     Difficulty = 'difficulty',
// }

