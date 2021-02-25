import { verifyPass } from "./verifier";

describe("password", () => {
    test("is null, it fails", () => {
        const result = verifyPass(null);
        
        expect(result).toBe("The password must not be null");
    });
    
    test("passes not null and lowercase, it fails",() => {
        const result = verifyPass("a");
        
        expect(result).toBe("Your password must contain:\na number\nmore than 8 characters\nan uppercase letter");
    });
    
    test("passes not null and uppercase, it fails", () => {
        const result = verifyPass("A");
        
        expect(result).toBe("Your password must contain:\na number\nmore than 8 characters\na lowercase letter");
    });

    test("passes not null and number, it fails", () => {
        const result = verifyPass("6");

        expect(result).toBe("Your password must contain:\nmore than 8 characters\nan uppercase letter\na lowercase letter");
    })

    test("all good, it passes", () => {
        const result = verifyPass("Aa23456789");
    
        expect(result).toBe(true);
    });
});

describe("3 conditions", () => {
    test("not null, contains number, 8+ chars", () => {
        const result = verifyPass("123456789");
        expect(result).toBe(true);
    });

    test("not null, contains uppercase, 8+ chars", () => {
        const result = verifyPass("AAAAAAAAAA");
        expect(result).toBe(true);
    });

    test("not null, contains lowercase, 8+ chars", () => {
        const result = verifyPass("aaaaaaaaaa");
        expect(result).toBe(true);
    });

    test("not null, contains lowercase, contains uppercase", () => {
        const result = verifyPass("Aaaaa");
        expect(result).toBe(true);
    });
})