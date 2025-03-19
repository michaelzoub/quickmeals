import { endpoint } from "../data/apiEndpoint";

//post function, send base64 encoded image to backend
export async function sendImageToOpenAI(uri: Array<string> | null) {
    let base64: Array<string> = []
    uri?.forEach((e) => {
        const base64string = Buffer.from(e, "binary").toString("base64");
        base64.push(base64string);
    })
    //const base64 = Buffer.from(uri, "binary").toString("base64");

    const response = await fetch(`${endpoint}/ai`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(base64)
    })
    //i receive the recommended recipes (first i can make it just text)
    const data = await response.json();

    //
    return data;
}