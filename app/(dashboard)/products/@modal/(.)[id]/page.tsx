"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Book } from "../../types";

type OLAuthor = { author?: { name?: string } };

export default function Modal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const rating = Number(searchParams.get("rating") || "4");
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://openlibrary.org/works/${id}.json`) 
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const authors: string[] = [];
        if (Array.isArray(d.authors)) {
          d.authors.forEach((item: OLAuthor) => {
            if (item.author?.name) authors.push(item.author.name);
          });
        }
        setBook({
          key: id,
          title: d.title,
          author_name: authors,
          cover_i: d.covers?.[0],
        });
      })
      .catch(() => setBook(null));
  }, [id]);

  if (!book)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-xl p-4">Yükleniyor…</div>
      </div>
    );

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => router.back()} // arka plana tıkla = kapat
    >
      {/* içerik alanı */}
      <div
        onClick={(e) => e.stopPropagation()} // içeriğe tıklayınca kapanmasın
        className="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-lg p-12"
      >
        <div className="flex gap-15">
          <Image
            src={coverUrl}
            alt={book.title}
            width={200}
            height={200}
            className="rounded-md object-cover"
             unoptimized
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author_name?.join(", ")}</p>
            <div className="mt-2 text-sm text-yellow-600">
              {"★".repeat(Math.round(rating))}
              {"☆".repeat(5 - Math.round(rating))} {rating.toFixed(1)}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-between gap-3 ">
          <Link
            href={`/products/${id}`}
            className="rounded-lg bg-black px-4 py-2 text-sm text-white"
          >
            Detay Sayfasına Git
          </Link>
          <button
            onClick={() => router.back()}
            className="rounded-lg border px-4 py-2 text-sm"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}