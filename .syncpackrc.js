// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ["prod", "dev", "!local", "peer"],
  source: [
    "package.json",
    "common/package.json",
    "frontend/package.json",
    "backend/package.json",
  ],
  semverGroups: [
    {
      range: "^",
      dependencies: ["**"],
      packages: ["**"],
    },
  ],
};

module.exports = config;
