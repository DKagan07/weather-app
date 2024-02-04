import type { Component } from "solid-js"
import Home from "./Home/Home"

async function sendBasicRequest() {
    const response = await fetch("/api")
    const result = await response.json()
    console.log("result: ", result)
    return result
}

const App: Component = () => {
    return (
        <>
            <Home />
            <button onClick={sendBasicRequest}>Test</button>
        </>
    )
}

export default App
