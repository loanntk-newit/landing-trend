# Landing Trend

Welcome to the Landing Trend project! This README provides you with instructions on how to set up your environment variables and run the project.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Setting Up the Environment

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/loanntk-newit/landing-trend.git
   cd landing-trend

2. **Install Dependencies**

   Run the following command to install the necessary dependencies:

   ```bash
   npm install

3. **Create the .env File**

   In the root of your project, create a file named .env based on the provided .env.example file.

   ```bash
   cp .env.example .env

4. **Edit the .env File**

   Open the .env file and fill in the required values. Here's an example of the parameters you need to set:

   ```bash
   # Site Metadata
    NEXT_PUBLIC_TITLE_META="Your site's title metadata"  # Your site's title metadata for search engines
    NEXT_PUBLIC_SITE_URL_META=https://yourwebsite.com                 # The URL of your website
    NEXT_PUBLIC_DESCRIPTION_META="A short description"  # A short description for your site metadata

    # Social Links
    NEXT_PUBLIC_URL_DISCORD=https://discord.com/invite/YOUR_INVITE_CODE  # Your Discord invite link
    NEXT_PUBLIC_URL_TWITTER=https://twitter.com/YOUR_PROFILE               # Your Twitter profile link
    NEXT_PUBLIC_URL_TELEGRAM=https://t.me/YOUR_CHANNEL                     # Your Telegram channel link

    # Main Site Title and Description
    NEXT_PUBLIC_TITLE="Main title"                                    # Main title displayed on the site
    NEXT_PUBLIC_DESCRIPTION="Main description"   # Main description of your site

    # Google Font
    NEXT_PUBLIC_GOOGLE_FONT=https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap  # URL for Google Font
    NEXT_PUBLIC_FONT_FAMILY="Bai Jamjuree", sans-serif                    # Fallback font family

    # Background Image URL
    NEXT_PUBLIC_BG_IMAGE_URL=https://nft.apu.com/images/titlebg.png      # URL for the background image
    ```


### Running the Project
Once your environment variables are set up, you can run the project using the following command:

```bash
npm run dev
```
This will start the development server, and you can view the project in your browser at http://localhost:3000.

### Building for Production
To build the project for production, run:

```bash
npm run build
```

Then you can start the production server with:

```bash
npm start
```