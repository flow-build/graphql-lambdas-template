# Apollo Server TurboRepo QuickStarter

Based upon [turboless](https://github.com/antoinewg/turboless)

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Packages

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

Run `pnpm dev` to run in offline mode (from the service or the root level).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [vitest](https://vitest.dev/) for testing.

### Build

To build all apps and packages, run the following command:

```bash
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
cd my-turborepo
pnpm run dev
```

## Testing

This template uses [vitest](https://vitest.dev/) as a testing framework.

```bash
cd my-turborepo
pnpm test       # to run the tests, with coverage
pnpm test:watch # to run tests in watch mode
```

## Deployment

Make sure to have `AWS_PROFILE` set up to the aws profile you want to deploy with. Otherwise the command will fail.
Run `aws configure list-profiles` to see your profiles available.

This template simulates two environments (staging and production):

```bash
cd my-turborepo
AWS_PROFILE=<aws_profile> pnpm deploy:staging
AWS_PROFILE=<aws_profile> pnpm deploy:production
```

⚠️ Running this command will deploy to AWS. Please make sure this is what you intend and beware of unintentional usage.

## Contributing

Feel free to open a PR, file an issue. I'll happily look into it.

