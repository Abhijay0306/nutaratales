# Nutura Tales Sustainability Blog

## Overview

A dynamic, cleanly designed sustainability blog built with Next.js 14 and Tailwind CSS. Explore our latest guides on zero-waste living, eco-friendly food preparation, and more.

## Architecture

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, Next/Font (Inter, Playfair Display)
- **Content**: File-system based MDX parsed with `next-mdx-remote`
- **Search**: Client-side filtering and search using `fuse.js`
- **SEO**: Next.js App Router Metadata API

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

## Adding Content

To add a new blog post, create a `.mdx` file in the `content/blog` directory with the following frontmatter:

```yaml
---
title: "Your Title Here"
date: "YYYY-MM-DDTHH:MM:SSZ"
author: "Author Name"
category: "Category Name"
excerpt: "A short summary of the post."
image: "URL to image"
---
```

## Features

- Statically generated pages for optimal performance
- Interactive client-side blog listing and search
- Embedded affiliate product components using `MDX`
- Fully responsive, accessible, minimal green-themed minimalist layout.
