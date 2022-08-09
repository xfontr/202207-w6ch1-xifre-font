import RestRepository from "./rest.repository";

const validUrl = "http://localhost:3000/posts";
const invalidUrl = "http://qwertyytrewqasdf.fdas.fds/afd/";

describe("Given a RestRepository class", () => {
  describe("When instantiated with the method loadAll and a valid URL as an argument", () => {
    test("Then it should return an array of one task", async () => {
      const restRepo = new RestRepository(validUrl);
      const expectedResult = [
        {
          id: 1,
          name: "Meet Dan",
          done: false,
        },
      ];

      const result = await restRepo.loadAll();

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When instantiated with the method loadAll and an invalid URL as an argument", () => {
    test("Then it should return an error", async () => {
      const restRepo = new RestRepository(invalidUrl);
      const expectedResult = "Error";

      const result = await restRepo.loadAll();

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When instantiated with a valid url and with the method add, with a task as an argument", () => {
    test("Then it should return the given task", async () => {
      const restRepo = new RestRepository(validUrl);

      const addedTask = {
        id: 2,
        name: "Meet Uncle Bob",
        done: false,
      };

      const result = await restRepo.add(addedTask);

      expect(result).toStrictEqual(addedTask);
    });
  });

  describe("When instantiated with an invalid url and with the method add, with a task as an argument", () => {
    test("Then it should return the given task", async () => {
      const restRepo = new RestRepository(invalidUrl);
      const addedTask = {
        id: 2,
        name: "Meet Uncle Bob",
        done: false,
      };

      const expectedResult = "Error";

      const result = await restRepo.add(addedTask);

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When instantiated with a valid url and with the method delete, with a task as an argument", () => {
    test("Then it should return a success message", async () => {
      const restRepo = new RestRepository(validUrl);
      const idToDelete = 1;

      const result = await restRepo.delete(idToDelete);

      expect((result as Response).ok).toBe(true);
    });
  });

  describe("When instantiated with an invalid url and with the method delete, with a task as an argument", () => {
    test("Then it should return a success message", async () => {
      const restRepo = new RestRepository(invalidUrl);
      const idToDelete = 1;
      const expectedResult = "Error";

      const result = await restRepo.delete(idToDelete);

      expect(expectedResult).toBe(result);
    });
  });
});
