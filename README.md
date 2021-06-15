# well-done-bot

> A bot to congratulate merged PRs Earthworm Jim style

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t well-done-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> well-done-bot
```

## Contributing

If you have suggestions for how well-done-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

MIT License. Copyright (c) 2021 Alex Inkin
