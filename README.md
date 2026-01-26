# EveCount.com - Quantum & AI Venture Studio

This repository contains the source code for the official website of Eve Count, a Singapore-based venture studio that invests Code, AI, and Architecture into new ventures.

## About Eve Count

Eve Count specializes in building deep-tech companies with a focus on Quantum technologies (Post-Quantum Cryptography, Quantum Key Distribution) and Artificial Intelligence. We partner with founders to take ideas from vision to a market-ready MVP.

This website serves as our digital headquarters. It's where potential partners can learn about our philosophy, view our portfolio, and submit their ideas.

## Tech Stack

This project is built with a modern, scalable tech stack:

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/), [ShadCN UI](https://ui.shadcn.com/), and [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [Firebase](https://firebase.google.com/) (Firestore for database, Firebase Authentication)
- **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit) for the AI Partner Chatbot

## Key Features

- **Dynamic Content:** Pages for About, Ventures, Incubator, Research, and more.
- **AI Partner Chatbot:** An integrated AI chatbot (`/src/components/chatbot.tsx`) that engages with visitors, captures venture pitches, and saves them directly to Firestore.
- **Universal Application Form:** A comprehensive form at `/apply` that handles various inquiry types (Venture Pitches, Incubator Applications, Career Inquiries, and Partnerships), with conditional fields and validation, submitting data to Firestore.
- **Protected Ventures Page:** A password-protected section at `/ventures` to showcase portfolio companies.
- **SEO Optimized:** Includes dynamic page titles, a `sitemap.ts`, and `robots.ts` for improved search engine visibility.

## Getting Started

To run the project locally:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## Project Structure

- **`src/app`**: Contains all the pages and layouts for the Next.js App Router.
- **`src/components`**: Reusable React components, including UI components from ShadCN and custom layout/section components.
- **`src/firebase`**: Firebase configuration, providers, and custom hooks (`useCollection`, `useUser`, etc.).
- **`src/ai`**: Genkit flows that power the AI features, such as the `ai-partner-chat`.
- **`src/lib`**: Helper functions, data definitions (e.g., `ventures.ts`), and schemas.
- **`docs/backend.json`**: The data blueprint defining the application's entities and Firestore structure.
- **`firestore.rules`**: Security rules for the Firestore database.
