import { createResource, createSignal, Show } from "solid-js"
import { queryZipCode } from "./queryzipcode"

export default function Home() {
    const [input, setInput] = createSignal("")
    const [data] = createResource(input, queryZipCode)
    return (
        <>
            <form>
                <h2> Put in US Zip code to get weather</h2>
                <div>
                    <input
                        name="zipcode"
                        placeholder="Input Zip Code"
                        type="text"
                        inputmode="numeric"
                        onInput={(e) => {
                            setInput(e.currentTarget.value)
                        }}
                    />{" "}
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault()
                            queryZipCode(input())
                        }}
                    >
                        Look up
                    </button>
                </div>
            </form>
            <Show when={!data.loading} fallback={<p>Searching...</p>}>
                <p>Found {data()}</p>
            </Show>
        </>
    )
}