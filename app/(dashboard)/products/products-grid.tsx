"use client";
import Image from "next/image";
import Link from "next/link";
import { Book } from "./types";


export default function ProductsGrid({ books }: { books: Book[] }) {
  return (
    <section className="grid grid-cols-2 gap-6 p-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {books.map((book) => {
        const id = book.key.startsWith("/works/")
          ? book.key.split("/").pop()
          : book.key;
        const rating = ((book.cover_i ?? 1) % 5) + 1;
        const coverUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&auto=format&fit=crop";

        return (
          <Link
            key={book.key}
            href={`/products/${id}`}
            scroll={false}
            className="group cursor-pointer block"
          >
            <div className="relative w-full aspect-2/3 overflow-hidden rounded-md border border-gray-200 bg-white transition-transform duration-300 group-hover:scale-105">
              <Image
                src={coverUrl}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                 unoptimized
              />
            </div>
            <div className="mt-5">
              <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
                {book.title}
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                {book.author_name?.[0] ?? "Bilinmeyen Yazar"}
              </p>
              <div className="mt-2 text-xs text-gray-700">⭐ {rating.toFixed(1)}</div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}