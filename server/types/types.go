package types

type WeatherOutput struct {
	Location Location
	Current  Current
	Forecast Forecast
}

type Location struct {
	Name            string  `json:"name"`
	Region          string  `json:"region"`
	Country         string  `json:"country"`
	Lat             float32 `json:"lat"`
	Lon             float32 `json:"lon"`
	Tz_id           string  `json:"tz_id"`
	Localtime_epoch int     `json:"localtime_epoch"`
	Localtime       string  `json:"localtime"`
}

type Current struct {
	Last_updated_epoch int        `json:"last_updated_epoch,omitempty"`
	Last_updated       string     `json:"last_updated,omitempty"`
	Temp_c             float32    `json:"temp_c,omitempty"`
	Temp_f             float32    `json:"temp_f,omitempty"`
	Is_day             int        `json:"is_day,omitempty"`
	Condition          condition  `json:"condition,omitempty"`
	Wind_mph           float32    `json:"wind_mph,omitempty"`
	Wind_kph           float32    `json:"wind_kph,omitempty"`
	Wind_degree        int        `json:"wind_degree,omitempty"`
	Wind_dir           string     `json:"wind_dir,omitempty"`
	Pressure_mb        float32    `json:"pressure_mb,omitempty"`
	Pressure_in        float32    `json:"pressure_in,omitempty"`
	Precip_mm          float32    `json:"precip_mm,omitempty"`
	Precip_in          float32    `json:"precip_in,omitempty"`
	Humidity           int        `json:"humidity,omitempty"`
	Cloud              int        `json:"cloud,omitempty"`
	Feelslike_c        float32    `json:"feelslike_c,omitempty"`
	Feelslike_f        float32    `json:"feelslike_f,omitempty"`
	Vis_km             float32    `json:"vis_km,omitempty"`
	Vis_miles          float32    `json:"vis_miles,omitempty"`
	Uv                 float32    `json:"uv,omitempty"`
	Gust_mph           float32    `json:"gust_mph,omitempty"`
	Gust_kph           float32    `json:"gust_kph,omitempty"`
	Air_quality        airquality `json:"air_quality,omitempty"`
}

type airquality struct {
	Co             float32 `json:"co,omitempty"`
	No2            float32 `json:"no_2,omitempty"`
	O3             float32 `json:"o_3,omitempty"`
	So2            float32 `json:"so_2,omitempty"`
	Pm2_5          float32 `json:"pm_2_5,omitempty"`
	Pm10           float32 `json:"pm_10,omitempty"`
	Us_epa_index   int     `json:"us_epa_index,omitempty"`
	Gb_defra_index int     `json:"gb_defra_index,omitempty"`
}

type condition struct {
	Text string `json:"text"`
	Icon string `json:"icon"`
	Code int    `json:"code"`
}

type Forecast struct {
	Forecastday []forecastday `json:"forecastday"`
}

type forecastday struct {
	Date       string `json:"date,omitempty"`
	Date_epoch int    `json:"date_epoch,omitempty"`
	Day        day    `json:"day,omitempty"`
	Astro      astro  `json:"astro,omitempty"`
	Hour       []hour `json:"hour,omitempty"`
}

type astro struct {
	Sunrise           string `json:"sunrise,omitempty"`
	Sunset            string `json:"sunset,omitempty"`
	Moonrise          string `json:"moonrise,omitempty"`
	Moon_phase        string `json:"moon_phase,omitempty"`
	Moon_illumination int    `json:"moon_illumination,omitempty"`
	Is_moon_up        int    `json:"is_moon_up,omitempty"`
	Is_sun_up         int    `json:"is_sun_up,omitempty"`
}

type day struct {
	Maxtemp_c            float32    `json:"maxtemp_c,omitempty"`
	Maxtemp_f            float32    `json:"maxtemp_f,omitempty"`
	Mintemp_c            float32    `json:"mintemp_c,omitempty"`
	Mintemp_f            float32    `json:"mintemp_f,omitempty"`
	Avgtemp_c            float32    `json:"avgtemp_c,omitempty"`
	Avgtemp_f            float32    `json:"avgtemp_f,omitempty"`
	Maxwind_mph          float32    `json:"maxwind_mph,omitempty"`
	Maxwind_kph          float32    `json:"maxwind_kph,omitempty"`
	Totalprecip_mm       float32    `json:"totalprecip_mm,omitempty"`
	Totalprecip_in       float32    `json:"totalprecip_in,omitempty"`
	Totalsnow_cm         float32    `json:"totalsnow_cm,omitempty"`
	Avgvis_km            float32    `json:"avgvis_km,omitempty"`
	Avgvis_miles         float32    `json:"avgvis_miles,omitempty"`
	Avghumidity          int        `json:"avghumidity,omitempty"`
	Daily_will_it_rain   int        `json:"daily_will_it_rain,omitempty"`
	Daily_chance_of_rain int        `json:"daily_chance_of_rain,omitempty"`
	Daily_will_it_snow   int        `json:"daily_will_it_snow,omitempty"`
	Daily_chance_of_snow int        `json:"daily_chance_of_snow,omitempty"`
	Condition            condition  `json:"condition,omitempty"`
	Uv                   float32    `json:"uv,omitempty"`
	Air_quality          airquality `json:"air_quality,omitempty"`
}

type hour struct {
	Time_epoch     int        `json:"time_epoch,omitempty"`
	Time           string     `json:"time,omitempty"`
	Temp_c         float32    `json:"temp_c,omitempty"`
	Temp_f         float32    `json:"temp_f,omitempty"`
	Is_day         int        `json:"is_day,omitempty"`
	Condition      condition  `json:"condition,omitempty"`
	Wind_mph       float32    `json:"wind_mph,omitempty"`
	Wind_kph       float32    `json:"wind_kph,omitempty"`
	Wind_degree    int        `json:"wind_degree,omitempty"`
	Wind_dir       string     `json:"wind_dir,omitempty"`
	Pressure_mb    float32    `json:"pressure_mb,omitempty"`
	Pressure_in    float32    `json:"pressure_in,omitempty"`
	Precip_mm      float32    `json:"precip_mm,omitempty"`
	Precip0_in     float32    `json:"precip_0_in,omitempty"`
	Humidity       int        `json:"humidity,omitempty"`
	Cloud          int        `json:"cloud,omitempty"`
	Feelslike_c    float32    `json:"feelslike_c,omitempty"`
	Feelslike_f    float32    `json:"feelslike_f,omitempty"`
	Windchill_c    float32    `json:"windchill_c,omitempty"`
	Windchill_f    float32    `json:"windchill_f,omitempty"`
	Heatindex_c    float32    `json:"heatindex_c,omitempty"`
	Heatindex_f    float32    `json:"heatindex_f,omitempty"`
	Dewpoint_c     float32    `json:"dewpoint_c,omitempty"`
	Dewpoint_f     float32    `json:"dewpoint_f,omitempty"`
	Will_it_rain   int        `json:"will_it_rain,omitempty"`
	Chance_of_rain int        `json:"chance_of_rain,omitempty"`
	Will_it_snow   int        `json:"will_it_snow,omitempty"`
	Chance_of_snow int        `json:"chance_of_snow,omitempty"`
	Vis_km         float32    `json:"vis_km,omitempty"`
	Vis_miles      float32    `json:"vis_miles,omitempty"`
	Gust_mph       float32    `json:"gust_mph,omitempty"`
	Gust_kph       float32    `json:"gust_kph,omitempty"`
	Uv             float32    `json:"uv,omitempty"`
	Air_quality    airquality `json:"air_quality,omitempty"`
	Short_rad      float32    `json:"short_rad,omitempty"`
	Diff_rad       float32    `json:"diff_rad,omitempty"`
}
