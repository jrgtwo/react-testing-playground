export default {
  "globals": {
    "ts-jest": {
      "tsConfig": "./tsconfig.app.json"
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$":
    "jest-transform-stub",
  }
}
