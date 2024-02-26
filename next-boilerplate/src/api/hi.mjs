export const handler = async (event, context) => {
  return {
    body: JSON.stringify({
      message: "Hello World",
      contextodo: context.geo || "context.geo nao tinha",
    }),
    statusCode: 200,
  };
};
