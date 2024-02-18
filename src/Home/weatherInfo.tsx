import { WeatherOutput } from "./queryzipcode"

interface WeatherInfoProps {
	wi: WeatherOutput | undefined
}
export default function WeatherInfo(props: WeatherInfoProps) {
	// parse props here to get current and forecast
	console.log("props in weatherInfo: ", props.wi)
	if (props.wi === undefined) {
		return <p> </p>
	}

	// ex:
	const { temp_c, temp_f, feelslike_c, feelslike_f } = props.wi.current

	return (
		<div>
			<h1>
				{props.wi.location.name.toUpperCase()},{" "}
				{props.wi.location.country}
			</h1>
			<h3>Current info:</h3>
			<p>
				Temperature: {temp_f}F ({temp_c}C){" "}
			</p>
			<p>
				Feels like: {feelslike_f}F ({feelslike_c}C)
			</p>
		</div>
	)
}
