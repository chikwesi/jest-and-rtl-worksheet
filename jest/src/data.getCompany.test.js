import { getCompany } from "./data";

test("Should return correct company object when found", async () => {
  const company = await getCompany(1);
  expect(company).toStrictEqual({
    id: 1,
    name: "Dibbert Group",
  })
});

test("Should return undefined when not found", async () => {
    const company = await getCompany(-99);
    expect(company).toBeUndefined()
})


test("Should not return null when found", async () => {
    const person = await getCompany(1);
    expect(person).not.toBeUndefined()
})
