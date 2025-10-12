import { defineConfig } from "@nyron/cli/config"

export default defineConfig({
  repo: "v0id-user/nyron-1",
  projects: {
    sdk: {
      tagPrefix: "sdk@",
      path: "packages/sdk",
    },
  },
  autoChangelog: true,
  onPushReminder: true,
})
