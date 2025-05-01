import { SOURCE } from "~/constants/source";

export default defineEventHandler((event) => {
  const list: Record<string, number>[] = [];

  const deployUrl = event.context.cloudflare.request.url;

  for (const n in SOURCE) {
    const nKey = parseInt(n) as keyof typeof SOURCE;
    for (const m in SOURCE[nKey]) {
      // const mKey = parseInt(m) as keyof (typeof SOURCE)[typeof nKey];

      list.push({
        [`${deployUrl}${n}/${m}`]: Object.values(SOURCE[nKey]).length,
      });
    }
  }

  return list;
});
