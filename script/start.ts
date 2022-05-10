import { ViteRunner } from "vite-runner";
import path from "path";

new ViteRunner({
    port: 8080,
    https: false,
    projectDirectory: path.join(__dirname, ".."),
    tsconfigPath: path.join(__dirname, "../config/tsconfig.src.json"),
    useReact: true,
    pathResolver: [
        {
            pattern: "css/",
            resolver: () => path.join(__dirname, "../src/css"),
        },
    ],
}).startServer();
