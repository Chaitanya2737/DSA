function main() {
    const array = [1, 2, 1, 3, 3, 4, 2];
    const result = support(array);
    console.log(result);
}

function support(array) {
    const map = new Map();

    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            //      key        value
            //       !           !
            map.set(array[i], map.get(array[i]) + 1);
        } else {
            map.set(array[i], 1);
        }
    }
    for (const [key , value] of map) {
        if (value <= 1) {
            return key
        }
    }
}
main();
