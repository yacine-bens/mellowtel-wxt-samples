import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: {
        name: "Mellowtel WXT Sample - Option 1",
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
