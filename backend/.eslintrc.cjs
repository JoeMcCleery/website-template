/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/babel', 'next/core-web-vitals'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
}
