export function getRandomNumber(range, offset) {
    return Math.floor(Math.random() * range + (offset ? offset : 0));
}

export function getRandomColor(opacity) {
    return `rgba(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)}, ${opacity ? opacity : 0.3})`;
}