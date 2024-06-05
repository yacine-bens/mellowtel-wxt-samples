import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [react()],
  }),
  manifest: {
    name: "Mellowtel React Sample",
    permissions: [
      "storage",
      "tabs",
      "declarativeNetRequest",
    ],
    host_permissions: [
      "\u003Call_urls\u003E",
    ],
  }
});
