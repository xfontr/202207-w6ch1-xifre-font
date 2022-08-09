import { rest } from "msw";

const url = "http://localhost:3000/posts/";

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Mikaeus",
          colors: "#",
          types: "#",
        },
      ])
    );
  }),

  rest.post(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Nomad Mythmaker",
        colors: "#",
        types: "#",
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
