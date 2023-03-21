module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  extends: ["plugin:prettier/recommended"],

  plugins: [
    "prettier", // "eslint-config-prettier"
    "import", // "eslint-plugin-import"
    "react", // "eslint-plugin-react":
  ],
};
