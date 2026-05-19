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

