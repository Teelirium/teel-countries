// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $index from "./routes/index.tsx";
import * as $random from "./routes/random.tsx";
import * as $visited from "./routes/visited.tsx";
import * as $RefreshButton from "./islands/RefreshButton.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/index.tsx": $index,
    "./routes/random.tsx": $random,
    "./routes/visited.tsx": $visited,
  },
  islands: {
    "./islands/RefreshButton.tsx": $RefreshButton,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
