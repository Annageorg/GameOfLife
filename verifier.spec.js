import { verify } from "./verifier";

describe("game of life rules", () => {

    test("Cells die from UNDERpopulation", () => {
        let stateOne = [
            [0, 1, 0],
            [0, 1, 0],
            [1, 0, 0],
        ];
        let stateTwo = [
            [0, 0, 0],
            [1, 1, 0],
            [0, 0, 0],
        ];

        const result =  verify (stateOne);
        expect(result).toStrictEqual(stateTwo);
    });

    test("Cells die from OVERpopulation", () => {
        let stateOne = [
            [1, 1, 0],
            [1, 1, 0],
            [1, 0, 0],
        ];
        let stateTwo = [
            [1, 1, 0],
            [0, 0, 0],
            [1, 1, 0],
        ];

        const result =  verify (stateOne);
        expect(result).toStrictEqual(stateTwo);
    });

    test("Cells live on", () => {
        let stateOne = [
            [0, 1, 0],
            [1, 1, 0],
            [1, 0, 1],
        ];
        let stateTwo = [
            [1, 1, 0],
            [1, 0, 1],
            [1, 0, 0],
        ];

        const result =  verify (stateOne);
        expect(result).toStrictEqual(stateTwo);
    });
    
    test("Cells become alive", () => {
        let stateOne = [
            [1, 0, 1],
            [0, 0, 0],
            [0, 1, 0],
        ];
        let stateTwo = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ];

        const result =  verify (stateOne);
        expect(result).toStrictEqual(stateTwo);
    });

});