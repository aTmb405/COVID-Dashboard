/*
    Interface for grabbing needed cases and deaths data to populate the COVID Dashboard
*/
export interface ICOVIDDataProvider {
    getCOVIDDataByDay: (country: string, days: number) => Promise<Array<COVIDDay>>;
    getCOVIDDataForCountry: (country: string) => Promise<COVIDCountry>;
}

export interface COVIDDay {
    day: Date;
    cases: number;
    deaths: number;
}

export interface COVIDCountry {
    cases: number;
    deaths: number;
}