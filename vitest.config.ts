import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        coverage: {
            include: ["src/*"],
        },
        dir: "tests",
        name: "wasmup",
    },
})
