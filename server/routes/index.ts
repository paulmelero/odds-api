import { SOURCE } from "~/constants/source";

export default defineEventHandler((event) => {
  const list: string[] = [];

  for (const n in SOURCE) {
    for (const m in SOURCE[n]) {
      list.push(`${n}/${m} - ${Object.values(m).length}`);
    }
  }

  return list;
});
