import { FastifyInstance } from "fastify";

const routes = (app: FastifyInstance) => {
  app.post("/", async (request, reply) => {
    console.log(request.body);
    console.log("/endorse POST called");
    return {
      message: "Hello, World!",
    };
  });
};

export default routes;
