import { FastifyPluginCallback } from "fastify";
import { PrivateRequest, RouterConfig } from "../../shared/types";

const plugin: FastifyPluginCallback = (app, opts, next) => {
  app.get(
    "/",
    {
      schema: { tags: ["Sample"] },
    },
    async (req: PrivateRequest, res) => {
      console.log("req.user");
    }
  );

  next();
};

export const sampleRouter: RouterConfig = [plugin, { prefix: "/v1/sample" }];
