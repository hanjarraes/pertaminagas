module.exports = {
  apps: [
    {
      name: "PertaminaGas",
      script: "serve",
      args: "start",
      env: {
        PM2_SERVE_PATH: ".",
        PM2_SERVE_PORT: 3001,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/index.html",
      },
    },
  ],
};
