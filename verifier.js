function verify(input) {
    
    const size = 3;
    //count neighbours function
    function getNeighbourCount(x, y) {
        let count = 0;
        for (let yy = -1; yy < 2; yy++) {
            for (let xx = -1; xx < 2; xx++) {
                if (xx === 0 && yy === 0) continue;
                if (x + xx < 0 || x + xx > size - 1) continue;
                if (y + yy < 0 || y + yy > size - 1) continue;
                if (input[x + xx][y + yy] === 1) count++;
            };
        };
        return count;
    }

    //create state two of game function
    function step() {
        let newArr = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const neighbours = getNeighbourCount(x, y);
                if (input[x][y] == 1 && neighbours < 2) newArr[x][y] = 0;
                if (input[x][y] == 1 && neighbours > 3) newArr[x][y] = 0;              
                if (input[x][y] == 0 && neighbours !== 3) newArr[x][y] = 0;
            };
        };
        return newArr;
    };

    let output = step();
    return output;

    
}
export { verify };
