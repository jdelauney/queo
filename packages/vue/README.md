# @queo/vue

A Vue 3 component library providing elegant, accessible UI components.

## Installation

```bash
# npm
npm install @queo/vue

# yarn
yarn add @queo/vue

# pnpm
pnpm add @queo/vue
```

## Setup

Add the plugin to your `main.ts`:

```typescript
import { createApp } from 'vue';
import plugin from '@queo/vue';
import App from './App.vue';

const app = createApp(App);
app.use(plugin);
app.mount('#app');
```

## Usage

### Avatar Component

A versatile avatar component that supports images, fallback initials, different sizes, and status indicators.

```vue
<template>
	<Avatar src="https://picsum.photos/200/300" size="xl" status="online" />
</template>
```

#### Props

| Prop       | Type                                        | Default    | Description                              |
| ---------- | ------------------------------------------- | ---------- | ---------------------------------------- |
| `src`      | `string`                                    | -          | URL of the avatar image                  |
| `alt`      | `string`                                    | `''`       | Alternative text for the image           |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`      | `'md'`     | Size of the avatar                       |
| `variant`  | `'circle' \| 'square'`                      | `'circle'` | Shape of the avatar                      |
| `status`   | `'online' \| 'offline' \| 'busy' \| 'away'` | -          | Status indicator                         |
| `fallback` | `string`                                    | -          | Text to display when image fails to load |

## Development

### Requirements

- Node.js 20+

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a Pull Request.

## Accessibility

All components are built with accessibility in mind and follow WAI-ARIA guidelines. Each component has appropriate ARIA attributes and keyboard navigation support.

## License

[MIT License](../../LICENSE)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [SebastienPanda](https://github.com/Sebastienpanda)
