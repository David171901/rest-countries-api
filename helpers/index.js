export function formatPopulation(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}