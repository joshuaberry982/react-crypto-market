# React Crypto Market

## - About

This project uses Fetch API to fetch from the [Coinranking](https://coinranking.com/) API.

This app uses Vite and React.

This was my first full project building a fully functioning site with both Fetch API and React Hooks and state.

## - Fork and use for yourself

You will need to get your own [Coinranking](https://coinranking.com/) API key. This can handle 10,000 requests per month for free.

In the src/components/Main.jsx and src/components/CoinTable.jsx there are 2 fetch requests.

On line 12 on Main.jsx and line 13 of CoinTable.jsx, there is a 'x-access-token' and both values are 'import.meta.env.VITE_COINRANKING_API_KEY'. This can be replaced with your API key.

Alternatively, you can leave the files unchanged and create a .env in the root folder and inside the file, type:

`VITE_COINRANKING_API_KEY = 'your_api_key'`

Don't forget to place the API key in quotation marks, no matter which way you choose.

## - Preview the build

Click [here](https://reactcryptomarket.netlify.app/) to preview the build of this project.