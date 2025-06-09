import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function getRandomLetters(length = 4) {
    return Array.from({ length }, () =>
        String.fromCharCode(65 + Math.floor(Math.random() * 26))
    ).join("");
}
