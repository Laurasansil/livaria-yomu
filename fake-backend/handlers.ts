import { rest } from "msw";
import products from "./data/products.json";

export const handlers = [
  rest.get("https://backend.dev/products", (req, res, ctx) => {
    return res(ctx.json(products));
  }),

  //   rest.post("/users/:id/messages", (req, res, ctx) => {
  //     const { message } = JSON.parse(req.body);
  //     return res(
  //       ctx.json({
  //         id: Math.random(),
  //         message,
  //       })
  //     );
  //   }),
];
