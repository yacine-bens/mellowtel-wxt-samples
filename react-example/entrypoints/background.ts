import Mellowtel from "mellowtel";
import { storage } from "wxt/storage";

// Background function cannot be async
export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(async () => {
    const currentVersion = storage.defineItem<string>("local:currentVersion");
    const updateShown = storage.defineItem<boolean>("local:updateShown", { defaultValue: false });

    const newVersion = browser.runtime.getManifest().version;
    const currentVersionValue = await currentVersion.getValue();

    if (newVersion !== currentVersionValue) {
      await currentVersion.setValue(newVersion);

      const updateShownValue = await updateShown.getValue();
      if (!updateShownValue) {
        await browser.runtime.openOptionsPage();
        await updateShown.setValue(true);
      }
    }
  });

  // The API key can be obtained from the Mellowtel dashboard
  // https://www.mellowtel.it/mellowtel-dashboard
  const MELLOWTEL_API_KEY = import.meta.env.VITE_MELLOWTEL_API_KEY;
  const mellowtel = new Mellowtel(MELLOWTEL_API_KEY);

  const main = async () => {
    await mellowtel.initBackground();

    const hasOptedIn = await mellowtel.getOptInStatus();
    if (hasOptedIn) {
      await mellowtel.start();
    }
  };

  main();
});
