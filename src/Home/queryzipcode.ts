export const queryZipCode = async (query: string) => {
    if (query.length === 0) return
    const response = await fetch("/api/" + query)
    const res = (await response.json()) as WeatherOutput
    return res
}

//**************************************************************
//
//The long typing of the weather output from the API (taken from my golang server)
//
//**************************************************************
export type WeatherOutput = {
    location: location
    current: current
    forecast: forecast
}

type location = {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}

type current = {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: condition
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
    air_quality: airquality
}

type airquality = {
    co: number
    no2: number
    o3: number
    so2: number
    pm2_5: number
    pm10: number
    us_epa_index: number
    gb_defra_index: number
}

type condition = {
    text: string
    icon: string
    code: number
}

type forecast = {
    forecastday: forecastday[]
}

type forecastday = {
    date: string
    date_epoch: number
    day: Day
    astro: astro
    hour: hour[]
}

type astro = {
    sunrise: string
    sunset: string
    moonrise: string
    moon_phase: string
    moon_illumination: number
    is_moon_up: number
    is_sun_up: number
}

export type Day = {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    totalsnow_cm: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: condition
    uv: number
    air_quality: airquality
}

type hour = {
    time_epoch: number
    time: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: condition
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip0_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    windchill_c: number
    windchill_f: number
    heatindex_c: number
    heatindex_f: number
    dewponumber_c: number
    dewponumber_f: number
    will_it_rain: number
    chance_of_rain: number
    will_it_snow: number
    chance_of_snow: number
    vis_km: number
    vis_miles: number
    gust_mph: number
    gust_kph: number
    uv: number
    air_quality: airquality
    short_rad: number
    diff_rad: number
}
