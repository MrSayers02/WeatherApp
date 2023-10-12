export interface WeatherLocally{
    town: string,
    temp: number,
    icon : string
}

export interface WeatherHourly{
    hour: string,
    icon : string,
    temp : number
}

export interface WeatherDaily{
    day : string,
    icon : string,
    temp : number
}

export interface WeatherAPI{
    name : string,
    region : string,
    temp_c : number
}

