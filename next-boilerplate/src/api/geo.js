// import { Context } from "@netlify/edge-functions";

// export default async (request, context) => {
//   // Here's what's available on context.geo

//   // context: {
//   //   geo: {
//   //     city?: string;
//   //     country?: {
//   //       code?: string;
//   //       name?: string;
//   //     },
//   //     subdivision?: {
//   //       code?: string;
//   //       name?: string;
//   //     },
//   //     latitude?: number;
//   //     longitude?: number;
//   //     timezone?: string;
//   //   }
//   // }

//   return Response.json({
//     geo: context.geo,
//   });
// };
export default async (request, context) => {
  // console.log(request);
  // console.log(Context);
  return new Response("Hello, Worlsd!s", {
    headers: { "content-type": "text/html" },
  });
};
