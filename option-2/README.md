# Mellowtel sample with WXT Vanilla template - Option 2

This repository contains a sample extension implementing [Mellowtel](https://mellowtel.it) API, built using the the [WXT](https://wxt.dev) framework.

**Option 2** as mentioned in the [docs](https://docs.mellowtel.it/get-started/quickstart#option-2), is suitable for extensions already published on the Chrome Web Store without the permissions (`tabs`, `declarativeNetRequest`) and host_permission (`<all_urls>`).

> [!NOTE]
> For new extensions or extensions that already have the mentioned permissions, checkout [option 1](https://github.com/yacine-bens/mellowtel-wxt-samples/tree/main/option-1).

## Getting Started
In this repo, we're using the vanilla (Typescript) template.

To get started with this sample extension, follow these steps:

1. Clone the repository.
2. Replace the placeholder API key in `.env` file with your own Mellowtel API key (can be found in the [dashboard](https://www.mellowtel.it/mellowtel-dashboard)).
3. Customize the extension's functionality according to your requirements.
4. Test the extension in dev mode: `npm run dev`.
5. Build / Zip the extension for production: `npm run build` / `npm run zip`

## Documentation

For detailed documentation on how to use the Mellowtel API and the WXT framework, refer to the following resources:

- [Mellowtel API](https://docs.mellowtel.it/get-started/welcome)
- [WXT Framework](https://wxt.dev)

## Contributing

Contributions to this sample extension are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Contact

If you have any questions or need further assistance, feel free to reach out at <yacine.web.ext@gmail.com>.
