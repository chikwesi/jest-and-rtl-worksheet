import { searchPeople } from "./data";

test("Should return a person when match on first name", async () => {
  const people = await searchPeople("bill");
  expect(people).toStrictEqual([
    {
      id: 1,
      firstName: "Bill",
      lastName: "Peters",
    }])
});


test("Should contain a person when match on first name", async () => {
  const people = await searchPeople("bill")
  expect(people).toContainEqual({
    id: 1,
    firstName: "Bill",
    lastName: "Peters"
  })
})