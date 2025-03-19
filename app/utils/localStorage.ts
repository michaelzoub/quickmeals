import { recipes } from "../types/recipe";

export function setSessionStorage(recipe: recipes): boolean {
    //pull array, then push and store: -> either gets array or empty array
    const array = JSON.parse(sessionStorage.getItem("recipes") || "[]");
    array.push(recipe);
    sessionStorage.setItem("recipes", array);
    return true
}

export function getSessionStorageItem() {
    return JSON.parse(sessionStorage.getItem("recipes") || "[]");
}