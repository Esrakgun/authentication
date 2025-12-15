import ProductsGrid from "./products-grid";

async function getBooks() {
  const res = await fetch( process.env.NEXT_PUBLIC_BOOKS_API_URL!, { // boşluk silindi
    cache: "no-store",
  });
  const data = await res.json();
  return data.docs.slice(0, 20);
}

export default async function ProductsPage() {
  const books = await getBooks();

  return (
    <main className="bg-[#CFADC1] px-8 py-16">
      <h1 className="px-8 text-2xl font-semibold text-gray-900 mb-10">
        Çok Satan Kitaplar
      </h1>
      <ProductsGrid books={books} />
    </main>
  );
}