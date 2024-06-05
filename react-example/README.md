# Mellowtel sample with WXT React template

This repository contains a sample extension implementing [Mellowtel](https://mellowtel.it) API, built using the the [WXT](https://wxt.dev) framework.

## Getting Started
In this repo, we're using the React template.

To get started with this sample extension, follow these steps:

1. Clone the repository.
2. Replace the placeholder API key in `.env` file with your own Mellowtel API key (can be found in the [dashboard](https://www.mellowtel.it/mellowtel-dashboard)).
3. Customize the extension's functionality according to your requirements.
4. Test the extension in dev mode: `npm run dev`.
5. Build / Zip the extension for production: `npm run build` / `npm run zip`

## Manual installation
1. First [commit](https://github.com/yacine-bens/mellowtel-wxt-samples/commit/05f8f18f1cd2dad701b394e2d0ea00a4c1c072c2):
   - `npx wxt@latest init project-name`
   - choose `react`
   - `cd project-name`
   - `npm i`
2. Second [commit](https://github.com/yacine-bens/mellowtel-wxt-samples/commit/83c5ceb1e9dd88cfdc71dad0ce75ad7156af44fd):
   - `npm i mellowtel`
   - follow changes in the commit

## Documentation

For detailed documentation on how to use the Mellowtel API and the WXT framework, refer to the following resources:

- [Mellowtel API](https://docs.mellowtel.it/get-started/welcome)
- [WXT Framework](https://wxt.dev)

## Contributing

Contributions to this sample extension are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Contact

If you have any questions or need further assistance, feel free to reach out at <yacine.web.ext@gmail.com>.
