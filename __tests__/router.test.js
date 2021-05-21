/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router.js";

describe("stack history test", () => {
  test("push to history test", () => {
    expect(pushToHistory("settings").length).toBe(2);
    expect(pushToHistory("entry", 1).state).toEqual({ page: `entry${1}` });
    expect(pushToHistory(" ").length).toBe(4);
  });
});
