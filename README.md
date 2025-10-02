# PA AI Logger

A Next.js web application for viewing logs from the PostgreSQL database. This application provides a simple interface to select applications and view their corresponding log entries.

## Features

- **App Selection Page**: Choose from available applications (currently supports Klara)
- **Logs Display**: View all log entries from the `klara_qa_dev` table in a responsive table format
- **Real-time Data**: Fetches data directly from PostgreSQL database
- **Responsive Design**: Works on desktop and mobile devices
- **Error Handling**: Graceful error handling with retry functionality

## Database Schema

The application connects to a PostgreSQL database with the following table structure:

```sql
CREATE TABLE klara_qa_dev (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    query TEXT NOT NULL,
    response TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'success',
    user_id VARCHAR(255),
    conversation_id VARCHAR(255),
    response_time_ms INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Environment Variables

The application uses the following environment variables (configured in `.env.local`):

```
POSTGRES_HOST=
POSTGRES_PORT=
POSTGRES_DATABASE=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_SSL=
NODE_ENV=
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Select Application**: On the home page, click on "Klara" to view its logs
2. **View Logs**: The logs page displays all entries from the `klara_qa_dev` table
3. **Navigate**: Use the "Back to Apps" button to return to the app selection page

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── logs/
│   │       └── route.ts          # API endpoint for fetching logs
│   ├── logs/
│   │   └── page.tsx              # Logs display page
│   └── page.tsx                  # App selection page
└── lib/
    └── db.ts                     # Database connection utility
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **PostgreSQL**: Database with `pg` client library
- **React Hooks**: For state management and side effects

## API Endpoints

- `GET /api/logs`: Fetches all log entries from the `klara_qa_dev` table

## Features

- **Responsive Table**: Displays all columns with proper formatting
- **Text Truncation**: Long text is truncated with tooltips for full content
- **Status Indicators**: Visual status indicators for success/error states
- **Loading States**: Loading spinner while fetching data
- **Error Handling**: User-friendly error messages with retry functionality
- **Timestamp Formatting**: Human-readable date and time formatting