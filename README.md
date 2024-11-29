# Queo UI

A modern component library that supports both Vue 3 and React, built with TypeScript and SCSS.

## 📦 Packages

| Package     | Version | Description           |
| ----------- | ------- | --------------------- |
| @queo/core  | v0.0.7  | Core styles and types |
| @queo/vue   | v0.0.7  | Vue 3 components      |
| @queo/react | v0.0.7  | React components      |

## 🚀 Quick Start

### Vue

```bash
# Install the package
pnpm add @queo/vue

# In your main.ts
import { createApp } from 'vue'
import plugin from "@queo/vue"
import App from './App.vue'

const app = createApp(App)
app.use(plugin)
app.mount('#app')

# In your component
<template>
  <Avatar
    src="https://picsum.photos/200/300"
    size="xl"
    status="online"
  />
</template>
```

### React

```bash
# Install the package
pnpm add @queo/react

# In your component
import { Avatar } from '@queo/react'

function App() {
  return (
    <Avatar
      src="https://picsum.photos/200/300"
      size="xl"
      status="online"
    />
  )
}
```

## 🎨 Features

- 📱 Responsive design
- 🎯 TypeScript support
- 🎨 Customizable with SCSS
- ♿️ Accessible components
- 🌙 Dark mode support
- 🔧 Easy to extend

## 🔨 Available Components

- `Avatar`: User profile images with status indicators
- `Tag`: Content labels and categories
- More components coming soon!

## 👥 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development

```bash
# Install dependencies
pnpm install

# Start development build
pnpm build

# Run examples
cd examples/vue && pnpm dev  # for Vue
cd examples/react && pnpm dev # for React
```

## 📄 Documentation

See individual package READMEs for detailed documentation:

- [@queo/vue](packages/vue/README.md)
- [@queo/react](packages/react/README.md)

## 📝 License

[MIT](LICENSE)

## 🤝 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 🔒 Security

For security issues, please read our [Security Policy](SECURITY.md).

## 🙏 Acknowledgments

Thanks to all our [contributors](CONTRIBUTORS.md)!
