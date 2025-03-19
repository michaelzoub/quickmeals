import { endpoint } from "../data/apiEndpoint";

//post function, send base64 encoded image to backend
export async function sendImageToOpenAI(uri: string | null) {
    const base64 = Buffer.from(uri, "binary").toString("base64");

    const response = await fetch(`${endpoint}/ai`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(base64)
    })
    //i receive the recommended recipes (first i can make it just text)
    const data = await response.json();
    const recipeName = data.recipe;
    const ingredients = data.ingredients;
    const time = data.time;
    const direction = data.directions;
    const servings = data?.servings;
    const imageUrl = data.imageUrl;
    //TODO: blahblah
    const dataObject = {
        recipeName: recipeName,
        ingredients: ingredients,
        time: time,
        direction: direction,
        servings: servings,
        imageUrl: imageUrl
    }
    //
    return dataObject;
}