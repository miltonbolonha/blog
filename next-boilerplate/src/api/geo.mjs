export const handler = async (request, context) => {
  return {
    body: JSON.stringify({ geo: context.geo }),
    statusCode: 200,
  };
};

// export default async (request: Request, context: Context) => {
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

// };
