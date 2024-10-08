import { Quote } from "./cli/commands/quote"

const argv = process.argv.slice(2)
Quote.run(argv)

/*
npm ci
npm run build
echo JSON_RPC_PROVIDER_POLYGON=https://polygon-bor-rpc.publicnode.com > .env

npx ts-node app.ts \
    --tokenIn 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270 \
    --tokenOut 0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359 \
    --amount 3630000000000000000 \
    --exactIn --protocols v2,v3,mixed --chainId 137 \
    --recipient 0xCe98E8973102bD64e866bc67E40bA39f1fd1239e \
    --useRouterBalance
*/
