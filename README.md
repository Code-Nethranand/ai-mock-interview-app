<p align="center">
  <img src="public\Banner.png" alt="AI Mock Interview App Logo" />
</p>


# AI Mock Interview App

AI Mock Interview App is a web application that helps users practice for job interviews by generating AI-powered mock interview questions and answers tailored to specific job roles, descriptions, and experience levels.

## Features

- **AI-Generated Interview Questions:** Get customized interview questions and answers using Google Gemini AI.
- **User Authentication:** Secure sign-in and sign-up with Clerk.
- **Dashboard:** Manage and start new mock interviews.
- **Webcam Integration:** Optionally enable webcam and microphone for a realistic interview experience.
- **Persistent Storage:** Save and retrieve interview sessions using a PostgreSQL database via Drizzle ORM.

## Tech Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS** (with shadcn/ui components)
- **Drizzle ORM** (with Neon serverless PostgreSQL)
- **Google Gemini AI** (`@google/generative-ai`)
- **Clerk** (authentication)
- **Lucide React** (icons)
- **Moment.js** (date formatting)
- **React Webcam** (webcam integration)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database (Neon or compatible)
- Google Gemini API Key
- Clerk API credentials

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai-mock-interview-app.git
   cd ai-mock-interview-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and add the following:

   ```
   NEXT_PUBLIC_DRIZZLE_DB_URL=your_neon_postgres_connection_url
   NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
   NEXT_PUBLIC_INFORMATION=Your informational message for users
   ```

4. **Push database schema (if needed):**
   ```bash
   npm run db:push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Sign Up / Sign In:** Use Clerk authentication to access the dashboard.
- **Create Interview:** Click "+ Add New" to start a new mock interview session.
- **Fill Details:** Enter job position, description, and years of experience.
- **Start Interview:** Review generated questions and optionally enable webcam.
- **Practice:** Go through the questions and answers to prepare for your real interview.

## Project Structure

- `/app` - Next.js app directory (pages, layouts, components)
- `/components` - UI components (shadcn/ui)
- `/utils` - Utility modules (DB, schema, AI integration)
- `/lib` - Shared utilities
- `/public` - Static assets (e.g., logo)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push Drizzle ORM schema to database
- `npm run db:studio` - Open Drizzle Studio for DB management

## License

MIT

---

**Made with ❤️ for interview preparation.**
