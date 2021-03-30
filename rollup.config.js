/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

/**
  * Helper to detect developer mode.
  *
  * @param cliArgs the command line arguments.
  * @return {Boolean} whether or not developer mode is enabled.
  */
function isDevMode(cliArgs) {
  return Boolean(cliArgs["config-enable-developer-mode"]);
}

export default (cliArgs) => [
  {
    input: "src/index.js",
    output: {
      file: "dist/rally-study-utilities.js",
      sourcemap: isDevMode(cliArgs) ? "inline" : false,
    },
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
  // NOTE: a content script rollup is not needed for this study.
];
