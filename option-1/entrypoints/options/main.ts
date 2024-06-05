import Mellowtel from "mellowtel";

// The API key can be obtained from the Mellowtel dashboard
// https://www.mellowtel.it/mellowtel-dashboard
const MELLOWTEL_API_KEY = import.meta.env.VITE_MELLOWTEL_API_KEY;
const mellowtel = new Mellowtel(MELLOWTEL_API_KEY);

window.onload = async () => {
    const acceptBtn = document.querySelector('#accept') as HTMLButtonElement;
    const declineBtn = document.querySelector('#decline') as HTMLButtonElement;
    const switchElement = document.querySelector('#optedin') as HTMLInputElement;
    const emojiElement = document.querySelector('#emoji') as HTMLSpanElement;

    acceptBtn.addEventListener('click', async () => {
        await mellowtel.optIn();
        await mellowtel.start();
        switchElement.checked = true;
        emojiElement.innerText = "😀";
    });

    declineBtn.addEventListener('click', async () => {
        await mellowtel.optOut();
        switchElement.checked = false;
        emojiElement.innerText = "😢";
    });

    const hasOptedIn = await mellowtel.getOptInStatus();
    switchElement.checked = hasOptedIn;
    emojiElement.innerText = hasOptedIn ? "😀" : "😢";

    switchElement.addEventListener('change', async () => {
        if (switchElement.checked) {
            await mellowtel.optIn();
            await mellowtel.start();
            emojiElement.innerText = "😀";
        } else {
            await mellowtel.optOut();
            emojiElement.innerText = "😢";
        }
    });
};