# Odds API — Odds (and End—point—s)

Odds API is a RESTful API that provides odds facts for various fun facts.

Have you ever wondered how many times a certain event has occurred? Or how likely it is to be struck by a lightning or how many times a specific number has been drawn in a lottery? This API provides you with the odds of these events happening.

## Features

- ℹ️ Provides odds facts for various events
- 🥚 Easy to use and integrate into your applications
- 🚀 RESTful API design
- 🗂️ JSON response format
- 🌟 Lightweight and fast
- 🔒 No authentication required
- 💰 Free to use
- 📖 Open-source
- 🛠️ Built with Typescript and Nitro
- ☁️ Deployed on Cloudflare Workers

## Usage

The API expects a GET request to an odds endpoint, and it returns a JSON response with the odds facts.

### Example Request

```bash
curl -X GET "https://odds-api.graficos-net.workers.dev/1/5"
```

If you have `jq` installed, you can format the output like this:

```bash
curl -X GET "https://odds-api.graficos-net.workers.dev/1/5" | jq .
```

### Example Response

```json
{
  "value": 0.5,
  "fraction": "1/2",
  "source": "https://en.wikipedia.org/wiki/Fair_coin",
  "exampleEvent": "Fair Coin Toss",
  "exampleDescription": "A fair coin has a 50% chance of landing on each side, meaning it's 1/2 likely to land on heads and 1/2 likely to land on tails."
}
```
