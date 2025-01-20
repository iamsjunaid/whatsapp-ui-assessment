# WhatsApp UI Assessment

This project is a WhatsApp UI assessment. Follow the instructions below to set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later)
- Supabase account

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/iamsjunaid/whatsapp-ui-assessment.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd whatsapp-ui-assessment
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Setting Up Supabase

To set up Supabase for this project, follow these steps:

1. **Create a Supabase account:**
   
   Go to [Supabase](https://supabase.io/) and sign up for a free account.

2. **Create a new table and insert data:**

   Go to your Supabase dashboard and insert the following SQL query to create and insert data into the new table:

   ```sql
   -- Create the groups table
    CREATE TABLE groups (
    id SERIAL PRIMARY KEY,             -- Unique identifier for each group
    name VARCHAR(255) NOT NULL,        -- Name of the group
    project VARCHAR(50),               -- Project associated with the group (e.g., #Demo, #Clients)
    labels TEXT[],                     -- Array of labels (e.g., ["High Value", "Priority", "Warm"])
    members INTEGER NOT NULL,          -- Number of members in the group
    last_active TIMESTAMP,             -- Timestamp for the last active time
    details TEXT                       -- Mock data for additional group details (side panel content));

    -- Insert mock data
    INSERT INTO groups (name, project, labels, members, last_active, details)VALUES
    ('Evoke <> Skope', '#Demo', ARRAY['High Value', 'Priority', 'Warm'], 3, NOW() - INTERVAL '1 day', 'Details about Evoke <> Skope group.'),
    ('Xindus Trade Network <> Periskope', '#Clients', ARRAY['Pilot', 'Priority'], 8, NOW() - INTERVAL '2 hours', 'Details about Xindus Trade Network group.'),
    ('Runo <> Periskope', '#Clients', ARRAY['Priority'], 5, NOW() - INTERVAL '3 hours', 'Details about Runo <> Periskope group.'),
    ('Skope Test Group <> 8', '#Demo', ARRAY['Pilot'], 4, NOW() - INTERVAL '1 hour', 'Details about Skope Test Group <> 8.'),
    ('Isprava <> Periskope WhatsApp CRM', '#Clients', ARRAY['High Value'], 6, NOW() - INTERVAL '5 hours', 'Details about Isprava <> Periskope.'),
    ('Test Demo15', '#Demo', ARRAY['Priority'], 5, NOW() - INTERVAL '10 hours', 'Details about Test Demo15 group.'),
    ('Vasishta <> Periskope', '#Clients', ARRAY['Warm'], 7, NOW() - INTERVAL '8 hours', 'Details about Vasishta <> Periskope group.'),
    ('Spyne <> Periskope', '#Clients', ARRAY['High Value'], 9, NOW() - INTERVAL '12 hours', 'Details about Spyne <> Periskope group.'),
    ('Xeno <> Periskope', '#Clients', ARRAY['Priority', 'Warm'], 4, NOW() - INTERVAL '1 day', 'Details about Xeno <> Periskope group.');
    ```

3. **Create a new project:**

   Once logged in, create a new project and note down the `API URL` and `anon key`.

4. **Configure environment variables:**

   Create a `.env` file in the root of your project directory and add the following environment variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   Replace `your-supabase-url` and `your-supabase-anon-key` with the values from your Supabase project.

5. **Install Supabase client:**

   ```bash
   npm install @supabase/supabase-js
   ```


## Running the Project

1. **Start the development server:**

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view the project.

## Building for Production

To create a production build, run:

```bash
npm run build
```

The production-ready files will be in the `build` directory.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
