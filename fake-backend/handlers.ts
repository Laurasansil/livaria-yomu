import { rest } from "msw";
import products from "./data/products.json";
import user from "./data/user.json";

//colocar o token no context

export const handlers = [
  rest.get("https://backend.dev/products", (req, res, ctx) => {
    return res(ctx.json(products));
  }),
  rest.post("https://backend.dev/login", (req, res, ctx) => {
    // @ts-ignore
    const { email, password } = JSON.parse(req.body);
    if (email == "laura@yomu.com" && password == "moranguinho") {
      return res(ctx.json(user));
    }

    return res(
      // Send a valid HTTP status code
      ctx.status(401),
      // And a response body, if necessary
      ctx.json({
        message: `Username or password is invalid`,
        //fazer try catch no front end
      })
    );
  }),

  //     rest.post("/users/:id/messages", (req, res, ctx) => {
  //       const { message } = JSON.parse(req.body);
  //       return res(
  //         ctx.json({
  //           id: Math.random(),
  //           message,
  //         })
  //       );
  //     }),
];
