import { atom } from "jotai"
import { recipes } from "../types/recipe";

export const recipeAtom = atom<recipes | null>(null);

export const recipeArrayAtom = atom<Array<recipes | null>>([null]);