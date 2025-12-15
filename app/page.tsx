import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-linear-to-br from-[#f7d9d0] via-[#f5e4dc] to-[#eef1f5]">
      
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <span className="uppercase tracking-widest text-sm text-gray-600">
            Editorial Collection
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-serif leading-tight text-gray-900">
            The Stories <br />
            That Stay With You
          </h1>

          <p className="mt-8 text-lg text-gray-700 max-w-lg leading-relaxed">
            A carefully curated library of books that inspire, challenge, and
            accompany you through different chapters of life.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/sign-up"
              className="inline-flex items-center rounded-full bg-gray-900 px-8 py-4 text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Start Your Journey
            </Link>

             <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-gray-900 px-10 py-4 text-gray-900 text-sm font-medium hover:bg-[#f7d9d0] hover:text-[#5A0E24] transition"
            >
              Explore Books
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full h-130 rounded-4xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop"
            alt="Library books"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>
    </main>
  );
}
