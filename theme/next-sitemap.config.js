/** @type {import('next-sitemap').IConfig} */
const mainInfos = require("./src/configs/main-infos.json");
module.exports = {
  siteUrl: mainInfos.website.siteUrl,
  generateRobotsTxt: false,
  exclude: [
    "/hide/",
    "/hide/*",
    "/library",
    "hide/",
    "hide/*",
    "library",
    "https://miltextos.com/hide/",
    "miltextos.com/hide/",
  ],
};