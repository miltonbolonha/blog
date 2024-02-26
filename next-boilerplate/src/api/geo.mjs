export const handler = async (event, context) => {
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
      contextodo: context.geo || "context.geo nao tinha",
    }),
    statusCode: 200,
  };
};

export const config = {
  path: "/geolocation",
};
