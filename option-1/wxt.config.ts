import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: {
        name: "Mellowtel WXT Sample - Option 1",
        permissions: [
            "storage",
            "declarativeNetRequestWithHostAccess",
        ],
        host_permissions: [
            "\u003Call_urls\u003E",
        ],
        web_accessible_resources: [
            {
                resources: [
                    "pascoli.html",
                ],
                matches: [
                    "<all_urls>",
                ]
            }
        ]
    }
});
