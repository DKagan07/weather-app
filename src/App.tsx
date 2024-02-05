import type { Component } from "solid-js"
import Home from "./Home/Home"

// This is an example of a good query to the "/" endpoint in my go server
// async function sendBasicRequest() {
// 	const response = await fetch("/api")
// 	const result = await response.json()
// 	console.log("result: ", result)
// 	return result
// }

const App: Component = () => {
	return <Home />
}

export default App
