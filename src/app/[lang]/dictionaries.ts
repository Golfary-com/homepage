import "server-only";
import { Dictionary } from "../../types";

const dictionaries = {
  ko: () => import("../../dictionaries/ko.json").then((module) => module.default as Dictionary),
  ja: () => import("../../dictionaries/ja.json").then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return dictionaries[locale as keyof typeof dictionaries]?.() ?? dictionaries.ko();
};
