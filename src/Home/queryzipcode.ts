// export const queryZipCode = async (query: string) => {
//     // Query is empty, don't return anything
//     // Need the check here otherwise it'll hit the endpoint on load
//     console.log("inside queryZipCode")
//     if (!query) return
//     console.log("after check")
//     console.log("query: ", query)
//     try {
//         console.log("inside try block")
//         const response = await fetch(`/api/${query}`)
//         const res = (await response.json()) as WeatherOutput
//         return res
//     } catch (e) {
//         console.log("error: ", e)
//     }
// }

//**************************************************************
//
//The long typing of the weather output from the API (taken from my golang server)
//
//**************************************************************
export type WeatherOutput = {
    Location: Location
    Current: Current
    Forecast: Forecast
}

type Location = {
    Name: string
    Region: string
    Country: string
    Lat: number
    Lon: number
    Tz_id: string
    Localtime_epoch: number
    Localtime: string
}

type Current = {
    Last_updated_epoch: number
    Last_updated: string
    Temp_c: number
    Temp_f: number
    Is_day: number
    Condition: condition
    Wind_mph: number
    Wind_kph: number
    Wind_degree: number
    Wind_dir: string
    Pressure_mb: number
    Pressure_in: number
    Precip_mm: number
    Precip0_in: number
    Humidity: number
    Cloud: number
    Feelslike_c: number
    Feelslike_f: number
    Vis_km: number
    Vis_miles: number
    Uv: number
    Gust_mph: number
    Gust_kph: number
    Air_quality: airquality
}

type airquality = {
    Co: number
    No2: number
    O3: number
    So2: number
    Pm2_5: number
    Pm10: number
    Us_epa_index: number
    Gb_defra_index: number
}

type condition = {
    Text: string
    Icon: string
    Code: number
}

type Forecast = {
    Forecastday: forecastday[]
}

type forecastday = {
    Date: string
    Date_epoch: number
    Day: day
    Astro: astro
    Hour: hour[]
}

type astro = {
    Sunrise: string
    Sunset: string
    Moonrise: string
    Moon_phase: string
    Moon_illumination: number
    Is_moon_up: number
    Is_sun_up: number
}

type day = {
    Maxtemp_c: number
    Maxtemp_f: number
    Mnumberemp_c: number
    Mnumberemp_f: number
    Avgtemp_c: number
    Avgtemp_f: number
    Maxwind_mph: number
    Maxwind_kph: number
    Totalprecip_mm: number
    Totalprecip_in: number
    Totalsnow_cm: number
    Avgvis_km: number
    Avgvis_miles: number
    Avghumidity: number
    Daily_will_it_rain: number
    Daily_chance_of_rain: number
    Daily_will_it_snow: number
    Daily_chance_of_snow: number
    Condition: condition
    Uv: number
    Air_quality: airquality
}

type hour = {
    Time_epoch: number
    Time: string
    Temp_c: number
    Temp_f: number
    Is_day: number
    Condition: condition
    Wind_mph: number
    Wind_kph: number
    Wind_degree: number
    Wind_dir: string
    Pressure_mb: number
    Pressure_in: number
    Precip_mm: number
    Precip0_in: number
    Humidity: number
    Cloud: number
    Feelslike_c: number
    Feelslike_f: number
    Windchill_c: number
    Windchill_f: number
    Heatindex_c: number
    Heatindex_f: number
    Dewponumber_c: number
    Dewponumber_f: number
    Will_it_rain: number
    Chance_of_rain: number
    Will_it_snow: number
    Chance_of_snow: number
    Vis_km: number
    Vis_miles: number
    Gust_mph: number
    Gust_kph: number
    Uv: number
    Air_quality: airquality
    Short_rad: number
    Diff_rad: number
}
