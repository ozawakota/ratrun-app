# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Firebase + Github Action 連携

Firebase Hosting を使用します

```
npm install -g firebase-tools
```

次へ

```
firebase login
```

許可してください

```
firebase init
```

```
For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)

リポジトリ名を設定
ozawakota/ratrun-app
```

```
What script should be run before every deploy? yarn install && npm run build
```

```
URL
https://ratrun-564ac.web.app/

```

v18.12.1
