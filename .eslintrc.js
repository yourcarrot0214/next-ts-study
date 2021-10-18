module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "arrow-body-style": "off",
    "react/jsx-props-no-spreading": "off",
    "implicit-arrow-linebreak": "off",
    "react/jsx-filename-extension": [1, { extends: [".js", ".jsx", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
  },
};
