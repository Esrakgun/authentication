import Image from "next/image";
import Link from "next/link";
import { Book } from "../types";

/* -----------  OPENLIBRARY'DEN GELEN EK ALANLAR  ----------- */
type OLWork = {
  title: string;
  authors?: { author?: { name?: string } }[];
  covers?: number[];
  description?: string | { value: string };
  subjects?: string[]; // kategori
  first_publish_date?: string; // yayın yılı
};

async function getBook(id: string): Promise<
  Book & {
    description?: string;
    year?: string;
    categories?: string[];
  }
> {
  const res = await fetch(`https://openlibrary.org/works/${id}.json`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Kitap bulunamadı");
  const data: OLWork = await res.json();

  const authorNames: string[] = [];
  if (data.authors && Array.isArray(data.authors)) {
    for (const item of data.authors) {
      if (item.author && typeof item.author.name === "string") {
        authorNames.push(item.author.name);
      }
    }
  }

  // açıklama metni
  const desc =
    typeof data.description === "string"
      ? data.description
      : data.description?.value ?? "";

  return {
    key: id,
    title: data.title,
    author_name: authorNames,
    cover_i: data.covers ? data.covers[0] : undefined,
    description: desc,
    year: data.first_publish_date ?? "",
    categories: data.subjects?.slice(0, 3) ?? [], // en fazla 3 kategori
  };
}

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ rating?: string }>;
}) {
  const { id } = await params;
  const { rating: rawRating } = await searchParams;
  const book = await getBook(id);
  const rating = rawRating ? Number(rawRating) : ((book.cover_i ?? 1) % 5) + 1;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&auto=format&fit=crop";

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2f0] px-8 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Geri Butonu */}
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
          >
            ← Geri
          </Link>
        </div>

        {/* İçerik */}
        <div className="flex flex-col md:flex-row gap-25 mb-8 px-10 mt-4">
          {/* Sol – Resim */}
          <div className="shrink-0">
            <Image
              src={coverUrl}
              alt={book.title}
              width={320}
              height={480}
              className="object-cover rounded-lg shadow-sm"
              priority
            />
          </div>

          {/* Sağ – Bilgiler */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-3">{book.title}</h1>

              {book.author_name && book.author_name.length > 0 && (
                <p className="text-gray-600 mb-2">
                  Yazar: {book.author_name.join(", ")}
                </p>
              )}

              {book.year && (
                <p className="text-gray-600 mb-2">Yayın Yılı: {book.year}</p>
              )}

              {book.categories && book.categories.length > 0 && (
                <p className="text-gray-600 mb-2">
                  Kategori: {book.categories.join(" • ")}
                </p>
              )}

              <div className="mt-4 text-sm text-yellow-600">
                {"★".repeat(Math.round(rating))}
                {"☆".repeat(5 - Math.round(rating))}{" "}
                <span className="ml-1 text-gray-500">{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Açıklama (varsa) */}
        {book.description && (
          <div className="px-10 mt-6">
            <h2 className="text-base font-semibold mb-2 text-gray-800">
              Kitap Hakkında:
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {book.description.length > 250
                ? book.description.slice(0, 500) + "…"
                : book.description}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
