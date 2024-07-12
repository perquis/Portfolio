import { match } from "ts-pattern";

type Result = {
  aspectRatio: string;
};

/**
 * This function returns the aspect ratio of the resolution.
 * @param resolution
 * @returns
 */
export const getAspectRatio = (resolution: Resolution): Result =>
  match(resolution)
    .with("1:1", () => ({ aspectRatio: "1 / 1" }))
    .with("2:3", () => ({ aspectRatio: "2 / 3" }))
    .with("3:2", () => ({ aspectRatio: "3 / 2" }))
    .with("3:4", () => ({ aspectRatio: "3 / 4" }))
    .with("4:1", () => ({ aspectRatio: "4 / 1" }))
    .with("4:3", () => ({ aspectRatio: "4 / 3" }))
    .with("4:6", () => ({ aspectRatio: "4 / 6" }))
    .with("5:4", () => ({ aspectRatio: "5 / 4" }))
    .with("5:7", () => ({ aspectRatio: "5 / 7" }))
    .with("8:9", () => ({ aspectRatio: "8 / 9" }))
    .with("8:10", () => ({ aspectRatio: "8 / 10" }))
    .with("8:11", () => ({ aspectRatio: "8 / 11" }))
    .with("9:16", () => ({ aspectRatio: "9 / 16" }))
    .with("9:21", () => ({ aspectRatio: "9 / 21" }))
    .with("16:9", () => ({ aspectRatio: "16 / 9" }))
    .with("16:10", () => ({ aspectRatio: "16 / 10" }))
    .with("21:9", () => ({ aspectRatio: "21 / 9" }))
    .run();
