import { fileURLToPath } from "node:url";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

/** @returns {import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    cacheComponents: true,
    partialPrefetching: true,
    // 개발 중 변환 비용을 줄이고, 배포 빌드의 자동 최적화는 유지합니다.
    reactCompiler: phase !== PHASE_DEVELOPMENT_SERVER,
    turbopack: {
      root: projectRoot,
      rules: {
        "globals.css": {
          loaders: [
            {
              loader: "@tailwindcss/turbopack",
              options: { base: fileURLToPath(new URL("./app", import.meta.url)) },
            },
          ],
          as: "*.css",
        },
      },
    },
  };
}
