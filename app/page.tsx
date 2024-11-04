import Header from "./component/Header";

// Retrieve title and description from environment variables
const title = process.env.NEXT_PUBLIC_TITLE || "Default Title";
const description =
  process.env.NEXT_PUBLIC_DESCRIPTION || "Default Description";

const bgImg = process.env.NEXT_PUBLIC_BG_IMAGE_URL;

export default function Home() {
  return (
    <div
      style={{
        background: bgImg ? `url(${bgImg})` : "/bg.png",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      {/* Header */}
      <Header />

      {/* Main */}

      <main className="flex flex-col gap-8 max-w-7xl w-full row-start-2 items-center text-white justify-center text-center">
        {/* Title */}
        <h1 className="font-bold text-4xl sm:text-6xl">{title}</h1>
        {/* Description */}
        <h3 className="whitespace-pre-line text-2xl">{description}</h3>
      </main>
      {/* END - Main */}
    </div>
  );
}
