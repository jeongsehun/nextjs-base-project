This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Bundle Analysis

This project includes bundle analysis to help optimize your application size:

```bash
# Analyze bundle size and open interactive treemap
yarn analyze

# Analyze and serve the built application
yarn analyze:server
```

The analysis will generate an interactive treemap showing the size of each module in your bundle, helping you identify optimization opportunities.

## Development Tools

This project includes several development tools for code quality and consistency:

### TypeScript

- Strict type checking enabled
- Enhanced compiler options for better development experience
- Custom type definitions in `src/types/`
- Path mapping configured for clean imports

### ESLint & Prettier

- Comprehensive ESLint rules for TypeScript and React
- Automatic import sorting and unused import removal
- React props sorting for consistency
- Prettier integration for code formatting

```bash
# Run linting
yarn lint

# Fix auto-fixable linting issues
yarn lint:fix

# Format code with Prettier
yarn format

# Check formatting without modifying files
yarn format:check

# Type checking
yarn type-check

# Watch mode for type checking
yarn type-check:watch

# Run all checks (type + lint + format)
yarn check-all

# Clean build artifacts
yarn clean
```

### VS Code Integration

- Workspace settings for optimal development experience
- Recommended extensions for Next.js development
- Auto-formatting on save
- ESLint integration with auto-fix

### Path Mapping

The following import aliases are configured:

- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/lib/*` → `./src/lib/*`
- `@/utils/*` → `./src/utils/*`
- `@/types/*` → `./src/types/*`
- `@/hooks/*` → `./src/hooks/*`
- `@/styles/*` → `./src/styles/*`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
