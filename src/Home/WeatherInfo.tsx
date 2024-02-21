import { For, Show, createSignal } from "solid-js"
import { WeatherOutput, Day } from "./queryzipcode"

interface WeatherInfoProps {
    wi: WeatherOutput | undefined
}

export function WeatherInfo(props: WeatherInfoProps) {
    // parse props here to get current and forecast
    console.log("props in weatherInfo: ", props.wi)
    if (props.wi === undefined) {
        return <p> </p>
    }

    const [showAirQuality, setShowAirQuality] = createSignal(false)
    const toggleDisplayAirQuality = () => setShowAirQuality(!showAirQuality())

    // can destructure these, but not quite necessary now
    const current = props.wi.current
    const location = props.wi.location
    const forecast = props.wi.forecast
    const forecastDay = forecast.forecastday

    const dayArr: Day[] = []
    forecastDay.forEach((forecastDay) => {
        dayArr.push(forecastDay.day)
    })

    function getDay(date: string) {
        return new Date(date).toDateString()
    }

    console.log(props.wi)
    return (
        <div>
            <span>
                <p style={{ "font-size": "36px" }}>
                    <span>
                        <strong>
                            {location.name.toUpperCase()}, {location.country}{" "}
                        </strong>
                    </span>
                    <span style={{ "font-size": "12px" }}>
                        ({location.lat}, {location.lon})
                    </span>
                </p>
            </span>
            <span>
                <p style={{ "vertical-align": "middle" }}>
                    <img
                        src={current.condition.icon}
                        style="vertical-align:middle;margin:0px 0px"
                    />
                    Current info:
                </p>
            </span>
            <ul style={{ "list-style": "none" }}>
                <li>
                    Temperature: {current.temp_f}°F{" "}
                    <span style={{ "font-size": "13px" }}>
                        ({current.temp_c}°C)
                    </span>{" "}
                </li>
                <li>
                    Feels like: {current.feelslike_f}°F{" "}
                    <span style={{ "font-size": "13px" }}>
                        ({current.feelslike_c}
                        °C)
                    </span>
                </li>
                <li>Humidity: {current.humidity}%</li>
                <li>
                    Wind: {current.wind_mph}mph{" "}
                    <span style={{ "font-size": "13px" }}>
                        ({current.wind_kph}kph)
                    </span>{" "}
                    <span style={{ "font-style": "italic" }}>
                        {current.wind_dir}
                    </span>
                </li>
                <li>UV Index: {current.uv}</li>
                <li>
                    Precipitation: {current.precip_in}in{" "}
                    <span style={{ "font-size": "13px" }}>
                        ({current.precip_mm}mm)
                    </span>
                </li>
                <li>Cloud cover: {current.cloud}%</li>
            </ul>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    toggleDisplayAirQuality()
                }}
            >
                Show Air Quality Information
            </button>
            <Show when={showAirQuality()}>
                <h5>Air Quality:</h5>
                <ul>
                    <li>Co: {current.air_quality.co}</li>
                    <li>No2: {current.air_quality.no2}</li>
                    <li>O3: {current.air_quality.o3}</li>
                    <li>So2: {current.air_quality.so2}</li>
                    <li>Pm2_5: {current.air_quality.pm2_5}</li>
                    <li>Pm10: {current.air_quality.pm10}</li>
                    <li>US EPA Index: {current.air_quality.us_epa_index}</li>
                    <li>
                        Gb Defra Index: {current.air_quality.gb_defra_index}
                    </li>
                </ul>
            </Show>
            <br />
            <h3>Forecast</h3>
            <For each={forecastDay}>
                {/* Need to get each of these divs to line up horizontally vs vertically*/}
                {(day) => (
                    <div style={{ width: "14%", float: "left" }}>
                        <p>
                            <strong>{getDay(day.date)}</strong>
                        </p>
                        <div>
                            <p style={{ "vertical-align": "middle" }}>
                                <img
                                    src={day.day.condition.icon}
                                    style="vertical-align:middle;margin:0px 0px;padding:0px 0px"
                                />
                                Temp range: {day.day.mintemp_f}°F/{" "}
                                {day.day.maxtemp_f}°F{"  "}
                                <span style={{ "font-size": "10px" }}>
                                    ({day.day.mintemp_c}°C / {day.day.maxtemp_c}
                                    °C)
                                </span>
                            </p>
                        </div>
                    </div>
                )}
            </For>
        </div>
    )
}
