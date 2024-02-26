export const handler = async (event, context) => {
  return {
    body: JSON.stringify({ message: "Hello World", contextodo: context }),
    statusCode: 200,
  };
};
