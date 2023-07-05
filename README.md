# Sample Firstline React

This is a sample React app with fully fledged authentication using Firstline.

## Helpful resources

- [Quick setup](https://docs.firstline.sh/quicksetup) - our guide for quickly adding login, logout and user information to a React app using Firstline.
- [NodeJS sample backend](https://github.com/firstline-idp/firstline-express-posts-api) - the backend counterpart to this sample app.
- [Firstline docs](https://docs.firstline.sh) - explore our docs site and learn more about Firstline.

## Getting started

### Setup Firstline Application & API
1. Follow the [Quick setup](https://docs.firstline.sh/quicksetup) to configure a Firstline Application.
2. Add a Firstline API as shown in [Secure API](https://docs.firstline.sh/secureapi).

**Important:** Don't forget to configure the Application URIs.

### Installation

1. Clone this repository
2. Install the required dependencies via the appropriate command below.

Using npm:

```sh
npm install
```

Using yarn:

```sh
yarn install
```

### Configuration

Open the .env file and enter the correct values. Replace **DOMAIN**, **CLIENT_ID**, and **API_IDENTIFIER** (audience) with the settings you configured in the Setup step. You can also find them on the Configure tab of the application and API in your dashboard.

Replace **API_URL** with the URL where your backend runs.

Example:
```sh
# .env
PORT=3000
REACT_APP_FIRSTLINE_DOMAIN="aohccczmw8q59zxpyptp.dev.firstline.sh"
REACT_APP_FIRSTLINE_CLIENT_ID="L.Ga3midssPHeXDoOQ3Kjj62qDXnNjfC"
REACT_APP_FIRSTLINE_AUDIENCE="http://localhost:8080"
REACT_APP_API_URL="http://localhost:8080"
```

### Setup the backend sample

To make full use of the sample app, you can now set up the appropriate backend. For this you can simply use our [NodeJS sample](https://github.com/firstline-idp/firstline-express-posts-api).

### Try it out

Run the following command and open http://localhost:3000 in your browser.

```sh
npm start
```