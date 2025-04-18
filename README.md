# NameGlyph

[![npm version](https://badge.fury.io/js/name-glyph.svg)](https://www.npmjs.com/package/name-glyph)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Generate beautiful, unique glyphs from names - perfect for user avatars, brand identities, and visual representations of text.

## Features

- 🎨 Generate unique, deterministic glyphs from any text input
- 🎯 Perfect for default user avatars
- 🚀 Lightweight and fast
- 💪 Written in TypeScript with full type support
- 🔄 Consistent output - same input always generates the same glyph

## Installation

```bash
# Using npm
npm install name-glyph

# Using yarn
yarn add name-glyph

# Using pnpm
pnpm add name-glyph
```

## Quick Start

```typescript
import { generateNameGlyph } from 'name-glyph';

// Generate a glyph
const glyph = generateNameGlyph('John Doe');
```

## API Reference

### `generateNameGlyph(text: string): string`

Creates a new glyph from the input text and returns it as an HTML string.

## Examples

### React Component

```typescript
import React from 'react';
import { generateNameGlyph } from 'name-glyph';

interface AvatarProps {
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const glyphHtml = generateNameGlyph(name);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: glyphHtml }}
      style={{ width: '64px', height: '64px' }}
    />
  );
};
```

### Vue Component

```vue
<template>
  <div style="width: 64px; height: 64px" v-html="glyphHtml" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { generateNameGlyph } from 'name-glyph';

const props = defineProps<{
  name: string;
}>();

const glyphHtml = computed(() => {
  return generateNameGlyph(props.name);
});
</script>
```

## Roadmap

We're planning to add these exciting features in future releases:

- 🎨 Customizable colors and patterns
- 🌈 Multiple pattern styles (hexagon, triangle, circle, square)
- 🖼️ Export as SVG and PNG
- 🎯 Customizable size and background
- 🎲 Custom seed for deterministic generation

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © Shekhar Kumar

---

<div align="center">
Made with ❤️ using <a href="https://github.com/shekhar/NameGlyph">NameGlyph</a>
</div>