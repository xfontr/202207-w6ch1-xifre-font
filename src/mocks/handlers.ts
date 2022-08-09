import { rest } from "msw";

const url = "http://localhost:3000/posts/";

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
        id: 1,
        name: "Meet Dan",
        done: false,
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
];
