module.exports = {
  apps: [
    {
      name: "Server",
      script: [
        "node",
        "--require ./node_modules/dotenv/config",
        "./server/index.js",
      ]
        .filter(Boolean)
        .join(" "),
      watch: ["./server/**/*.js", "./index.js", "./.env"],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? "development",
        FORCE_COLOR: "1",
      },
    },
    {
      name: "Remix",
      script: "remix watch",
      ignore_watch: ["."],

      env: {
        NODE_ENV: process.env.NODE_ENV ?? "development",
        FORCE_COLOR: "1",
      },
    },
  ],
};
