//initial state of game
let gridInitial = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 0, 0],
];
console.table(gridInitial);
console.log(gridInitial.length)
 for (let i=0; i<gridInitial.length; i++){
     let innerArray = gridInitial[i].length;
     console.log(innerArray)
 }

//easch element in terms of i and j
// let gridPseudo = [
//     [ 'i, j' , 'i, j+1' , 'i, j+2' ],
//     ['i+1, j' , 'i+1, j+1' , 'i+1, j+2' ],
//     ['i+2, j' , 'i+2, j+1' , 'i+2, j+2' ],
// ];
// console.table(gridPseudo);

// //accessing each element of the 2-D array
// for (let i= 0; i <gridInitial.length; i++) {
//     let innerArrayLength = gridInitial[i].length;
//     for (let j=0; j<innerArrayLength; j++){
//         console.log('[' + i + ',' + j + '] = ' + gridInitial[i][j] )
//     }
// };

// //getting the neighbours of the cells
// function getNeighbours (x, y){

// }
