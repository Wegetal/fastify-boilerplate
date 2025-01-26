import { DoneFuncWithErrOrRes, FastifyReply } from "fastify";

import env from "../env";

import { CustomFastifyRequest } from "../shared/types/Request";

export const verifyAuthAndRole = (
  request: CustomFastifyRequest,
  reply: FastifyReply,
  done: DoneFuncWithErrOrRes
) => {
  const { headers, routeOptions } = request;
  const { authorization, "x-api-key": xApiKey } = headers;

  if (xApiKey !== env.API_KEY) {
    return reply.code(403).send({ error: "Invalid API KEY" });
  }

  if (routeOptions?.url?.includes("/documentation")) {
    done();
    return;
  }

  done();
};

export const userValidationMiddleware = async (
  request: CustomFastifyRequest,
  reply: FastifyReply
) => {};
