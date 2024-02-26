import { Context } from "@netlify/edge-functions";

export const handler = async (context: Context) => {
  // Here's what's available on context.geo

  // context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     latitude?: number;
  //     longitude?: number;
  //     timezone?: string;
  //   }
  // }

  return {
    body: JSON.stringify({
      message: "Hello World",
      contextodo: context.geo || context,
    }),
    statusCode: 200,
  };
};
