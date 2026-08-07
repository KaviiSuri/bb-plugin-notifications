import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = resolve(import.meta.dirname, "..");

describe("plugin scaffold", () => {
  it("declares compatible backend and frontend entries", async () => {
    const manifest = JSON.parse(
      await readFile(resolve(root, "package.json"), "utf8"),
    ) as {
      name: string;
      private: boolean;
      engines: { bb: string; bbPluginSdk: string };
      bb: { server: string; app: string };
    };

    expect(manifest).toMatchObject({
      name: "bb-plugin-notifications",
      private: true,
      engines: { bb: ">=0.35", bbPluginSdk: "^0.4.1" },
      bb: { server: "./server.ts", app: "./app.tsx" },
    });

    await Promise.all([
      access(resolve(root, manifest.bb.server)),
      access(resolve(root, manifest.bb.app)),
    ]);
  });
});
