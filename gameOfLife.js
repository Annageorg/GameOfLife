const resolution = 3;
let stateOne = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 0, 0],
];

function createCells() {
    let arr = new Array(resolution);
    for (let x = 0; x < resolution; x++) {
        let cols = new Array(resolution);
        for (let y = 0; y < resolution; y++) {
        cols[y] = 1;
        }
        arr[x] = cols;
    }
    return arr;
};

let stateTwo;

function step() {
    let newArr = createCells();
    for (let y = 0; y < resolution; y++) {
      for (let x = 0; x < resolution; x++) {
        const neighbours = getNeighbourCount(x, y);
        if (stateOne[x][y] == 1 && neighbours < 2 ) newArr[x][y] = 0;   
        if (stateOne[x][y] == 0) newArr [x][y] =0;    
      } 
    }
    return newArr
}
stateTwo = step();
console.log(stateTwo)


function getNeighbourCount (x, y) {
    let count = 0;
    for (let yy = -1; yy <2; yy++){
        for (let xx = -1; xx <2; xx++){
            if (xx === 0 && yy === 0) continue;
            if (x + xx < 0 || x + xx > resolution - 1) continue;
            if (y + yy < 0 || y + yy > resolution - 1) continue;
            if (stateOne[x + xx][y + yy] === 1) count++;
        }
    }
    return count;
}