const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0); // zero jest tu parametrem początkowym, args to spakowane do tablicy argumenty
};
console.log(sum(1, 2, 3)); // 6 - zostaje wyeliminowana potrzeba stworzenia tablicy