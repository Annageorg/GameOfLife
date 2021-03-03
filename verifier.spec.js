import { verifyPass } from "./verifier";

describe("game of life rules", () => {
    test("Dies from underpopulation", () => {
        let stateOne = [
            [0, 1, 0],
            [0, 1, 0],
            [1, 0, 0],
        ];
        let stateTwo = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ];

        const result =  verifyPass (stateOne, stateTwo );
        expect(result).toBe("Cells died from under-population");
    });
});