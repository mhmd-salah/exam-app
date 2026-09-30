// Settings
module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    { value: "refactor", name: "refactor: Code restructuring" },
    { value: "style", name: "style:    Formatting/style changes" },
    { value: "docs", name: "docs:     Documentation" },
    { value: "test", name: "test:     Tests" },
    { value: "chore", name: "chore:    Maintenance" },
    { value: "perf", name: "perf:     Performance improvement" },
    { value: "build", name: "build:    Build/dependencies" }
  ],

  messages: {
    type: "Select the type of change:",
    subject: "Write a short description:",
    scope: "What is the scope? (optional):"
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix", "refactor"]
};