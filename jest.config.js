export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {"tsconfig": "./tsconfig.app.json"}],
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$":
    "jest-transform-stub",
  }
}
