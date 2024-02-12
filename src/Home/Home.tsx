import { createEffect, createResource, createSignal, For, Show } from "solid-js"
import { WeatherOutput } from "./queryzipcode"

export const queryZipCode = async (query: string) => {
	if (query.length === 0) return
	const response = await fetch("/api/" + query)
	const res = (await response.json()) as WeatherOutput
	return res
}

export default function Home() {
	const [inputSignal, setInputSignal] = createSignal("")
	const [querySignal, setQuerySignal] = createSignal("")
	const [weatherResource] = createResource(querySignal, queryZipCode)

	createEffect(() => console.log(weatherResource(), weatherResource.loading))

	return (
		<>
			<form>
				<h2> Put in Your US Zip Code to Get the Weather</h2>
				<div>
					<label for="zipcode">Search here </label>
					<input
						id="zipcode"
						value={inputSignal()}
						placeholder="Input Zip Code"
						type="text"
						inputmode="numeric"
						onInput={(e) => {
							setInputSignal(e.currentTarget.value?.trim())
						}}
					/>
				</div>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault()
						setQuerySignal(inputSignal())
					}}
				>
					Look up
				</button>
			</form>

			<Show when={weatherResource.error}> ERROR MESSAGE </Show>

			<Show when={!weatherResource.loading} fallback={<>Loading...</>}>
				{/* This shows all the data, now I think I need to parse it in an element and branch off?*/}
				{JSON.stringify(weatherResource())}
			</Show>
		</>
	)
}
