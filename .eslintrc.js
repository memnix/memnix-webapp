module.exports = {
  root: true,
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:anti-trojan-source/recommended",
    "plugin:security-node/recommended",
  ],
  plugins: ["prettier", "anti-trojan-source", "security-node"],
};
