export async function queryZipCode(query: string) {
    // Query is empty, don't return anything
    if (query.trim() === "") return []

    // now have to talk to backend
    // I imagine since the server is open at this endpoint, we have to do
    // something like this:
    const response = await fetch("localhost:3001/<zipcode>")
    return response.json()
}
