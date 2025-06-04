# XRPL EVM Ecosystem Web

A modern, visually organized web dashboard for exploring the XRPL EVM ecosystem. This project displays ecosystem sections (Validators, Providers, dApps, Bridges, Core, Auditors, Wallets, etc.) as interactive cards, each containing relevant project logos and links.

## Features

-   Responsive grid layout for all ecosystem sections
-   Minimal, dark-themed UI with clear separation between cards
-   Header with XRPL and Ecosystem branding
-   Each section card displays project logos in a neat grid
-   Easily extensible: add new projects by updating the assets and data

## Getting Started

### Prerequisites

-   Node.js (v16 or newer recommended)
-   npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the App

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000` by default.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
my-xrplevm-ecosystem/
  public/
    assets/           # All SVGs and logo images
  src/
    components/       # React components (Header, SectionCard, etc.)
    App.tsx           # Main app layout
    App.css           # Main styles
    ...
```

## Adding/Editing Ecosystem Projects

-   Add new logos to `public/assets/sections/<section>/`.
-   Update the relevant section data in the code (see `SectionCard.tsx`).

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
