//https://nitro.unjs.io/config
import nitroCloudflareBindings from "nitro-cloudflare-dev";

export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2024-09-19",
  modules: [nitroCloudflareBindings],
});
