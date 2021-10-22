module.exports = {
  root: true,
  extends: "@react-native-community",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [
    // =================== eslint for TypeScript & JS
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "react", "react-native"],
      extends: [
        "@react-native-community",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended"
      ]
    }
  ]
};
