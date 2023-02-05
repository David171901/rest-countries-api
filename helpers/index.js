export function formatPopulation(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

export function replaceSpaces(str) {
    return str.replace(/\s/g, "_");
}

export function replaceUnderscores(str) {
    return str.replace(/_/g, " ");
}