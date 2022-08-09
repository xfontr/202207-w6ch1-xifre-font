import { rest } from "msw";

const url = "http://localhost:3000/posts";
const invalidUrl = "http://qwertyytrewqasdf.fdas.fds/afd/";

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Meet Dan",
          done: false,
        },
      ])
    );
  }),

  rest.post(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 2,
        name: "Meet Uncle Bob",
        done: false,
      })
    );
  }),

  rest.get(invalidUrl, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: "Nothing here",
      })
    );
  }),

  rest.get(invalidUrl, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: "Nothing here",
      })
    );
  }),

  rest.delete(`${url}/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        successMessage: "Task deleted",
      })
    );
  }),

  rest.patch(`${url}/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        successMessage: "Task modified",
      })
    );
  }),

  rest.patch(invalidUrl, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: "Error",
      })
    );
  }),
];
