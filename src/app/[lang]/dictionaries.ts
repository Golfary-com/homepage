import "server-only";

const dictionaries = {
  ko: () => import("../../dictionaries/ko.json").then((module) => module.default),
  ja: () => import("../../dictionaries/ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    // @ts-expect-error: locale string type mismatch is expected for simple implementation
  return dictionaries[locale]?.() ?? dictionaries.ko();
};
