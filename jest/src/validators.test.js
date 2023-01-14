import { isUrl, isEmail } from './validators';

describe('isEmail', () => {

    test("isEmail should return true when valid email", () => {
        expect(isEmail("someone@somewhere.com")).toBe(true);
    });

    test("isEmail should return false when invalid email", () => {
        expect(isEmail("someone")).toBe(false);
    });
})

describe("isUrl", () => {

    test("isUrl should return true when valid url", () => {
        expect(isUrl("https://www.google.com")).toBe(true);
    });

    test("isUrl should return false when invalid url", () => {
        expect(isUrl("google")).toBe(false);
    });
})