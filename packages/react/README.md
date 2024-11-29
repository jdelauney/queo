# @queo/react

A React component library providing elegant, accessible UI components.

## Installation

```bash
# npm
npm install @queo/react

# yarn
yarn add @queo/react

# pnpm
pnpm add @queo/react
```

## Usage

### Avatar Component

A versatile avatar component that supports images, fallback initials, different sizes, and status indicators.

```tsx
import { Avatar } from '@queo/react';

export default function Demo() {
	return <Avatar src="https://picsum.photos/200/300" size="xl" status="online" />;
}
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

We welcome contributions! Please read our [Contributing Guide](../../CONTRIBUTING.md) before submitting a Pull Request.

## Accessibility

All components are built with accessibility in mind and follow WAI-ARIA guidelines. Each component has appropriate ARIA attributes and keyboard navigation support.

## License

[MIT License](../../LICENSE)

## Credits

- [SebastienPanda](https://github.com/Sebastienpanda)
