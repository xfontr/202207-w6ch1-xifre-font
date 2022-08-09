import { waitFor } from "@testing-library/react";
import { error } from "console";
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
});
