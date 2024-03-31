"use client";
// import { CloudinaryImage } from "@cloudinary/url-gen";
// import {Cloudinary} from '@cloudinary/url-gen';

// const CloudinaryImage = require("@cloudinary/url-gen");
// const quality = require("@cloudinary/url-gen/actions/delivery");
// const auto = require("@cloudinary/url-gen/qualifiers/quality");
// import { quality } from "@cloudinary/url-gen/actions/delivery";
// import { auto } from "@cloudinary/url-gen/qualifiers/quality";
// Create your instance
// const cld = new Cloudinary({
//   cloud: {
//     cloudName: 'demo'
//   },
//   url: {
//     secure: true // force https, set to false to force http
//   }
// });
export default function myImageLoader({ src, width, height, quality }) {
  let finalSrc =
    src + `?w=${width || 150}&h=${height || 150}&q=${quality || 100}`;

  if (src.includes("cloudinary")) {
    finalSrc = src.split("/image/upload/");
    finalSrc = finalSrc[0] + `/q_auto/f_jpg/w_620/` + finalSrc[1];
  }
  const objReturn = `${finalSrc || "placeholder.png"}`;

  return `${objReturn}`;
}
