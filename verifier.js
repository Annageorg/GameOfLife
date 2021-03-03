function verifyPass(input1, input2) {
    const resolution = 3;
    //count neighbours function
    function getNeighbourCount (x, y) {
        let count = 0;
        for (let yy = -1; yy <2; yy++){
            for (let xx = -1; xx <2; xx++){
                if (xx === 0 && yy === 0) continue;
                if (x + xx < 0 || x + xx > resolution - 1) continue;
                if (y + yy < 0 || y + yy > resolution - 1) continue;
                if (input1[x + xx][y + yy] === 1) count++;
            }
        }
        return count;
    }

    //create state two of game function
    function step() {
        let newArr = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        for (let y = 0; y < resolution; y++) {
          for (let x = 0; x < resolution; x++) {
            const neighbours = getNeighbourCount(x, y);
            if (input1[x][y] == 1 && neighbours < 2 ) newArr[x][y] = 0;   
            if (input1[x][y] == 0) newArr [x][y] =0;    
          } 
        }
        return newArr
    }

    let output = step();

    function comparing(){
        let cnt = 0;
        for (let y = 0; y < resolution; y++) {
            for (let x = 0; x < resolution; x++) {
            if (output[x][y] == input2[x][y]) cnt++;
            } 
        }
        return cnt;
    };

    let comparison = comparing();
    if(comparison === 9){
        return "Cells died from under-population"
    } else {
        return "cells didn't behave as expected"
 
    }
    


    
    
}
export { verifyPass };
