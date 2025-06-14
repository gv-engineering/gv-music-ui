// utils/shuffle.js
/**
 * Returns a new array in which the elements of the original array are mixed using the Fisher-Yates algorithm.
 * @param {Array<any>} array — source array
 * @returns {Array<any>} — new shuffled array
 */
export function shuffleArray(array) {
    const result = [...array];               // клонируем, чтобы не мутировать исходник
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
