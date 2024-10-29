import { FastifyInstance } from "fastify";

const routes = (app: FastifyInstance) => {
  app.register(import("./endorse"), { prefix: "/endorse" });
};

export default routes;
