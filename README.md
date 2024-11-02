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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


==========

To get this running:

Create new Next.js project:

bashCopynpx create-next-app@latest ai-workflow --typescript --tailwind --app --src-dir

Install dependencies:

bashCopynpm install reactflow @radix-ui/react-slot class-variance-authority clsx tailwind-merge

Add these components to your project structure.

This implementation provides:

Drag & Drop Interface:


Sidebar with different node types
Drag & drop functionality to add nodes
Visual connection between nodes


Node Types:


AI Prompt Node: For entering prompts to AI models
Text Node: For text input
Image Node: For image processing
Output Node: For displaying or saving results


Features:


Interactive canvas with zoom and pan
Node connections with handles
Custom styling for different node types
Editable node content

The flow works like this:

Drag nodes from sidebar to canvas
Connect nodes by dragging from handles
Enter prompts or content in nodes
Configure output nodes for results

Would you like me to add any specific features like:

AI integration with OpenAI/Anthropic
Save/Load workflows
Execute workflow functionality
More node types or customization options?
