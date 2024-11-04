import type { Metadata } from "next";
import "./globals.css";

// Retrieve title and description from environment variables
const title = process.env.NEXT_PUBLIC_TITLE_META || "Default Title";
const description =
  process.env.NEXT_PUBLIC_DESCRIPTION_META || "Default Description";
const url = process.env.NEXT_PUBLIC_SITE_URL_META || "https://yourwebsite.com";

// Retrieve Google Font URL and font family from environment variables
const googleFontUrl = process.env.NEXT_PUBLIC_GOOGLE_FONT;
const fontFamily = process.env.NEXT_PUBLIC_FONT_FAMILY || "sans-serif"; // Default fallback

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: description,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: description,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/twitter-image.png" />
        {googleFontUrl && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link href={googleFontUrl} rel="stylesheet" />
          </>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: title,
              url: url,
              logo: "/logo.png",
              sameAs: [
                process.env.NEXT_PUBLIC_URL_DISCORD,
                process.env.NEXT_PUBLIC_URL_TWITTER,
                process.env.NEXT_PUBLIC_URL_TELEGRAM,
              ].filter(Boolean),
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: fontFamily }}>{children}</body>
    </html>
  );
}
