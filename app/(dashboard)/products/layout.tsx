import { ReactNode } from "react";

export default function ProductsLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <section className="w-full min-h-[calc(100vh-4rem)]">
      
      <div className="w-full">
        {children}
      </div>

      {/* PREVIEW MODAL SLOT */}
      {modal}
      
    </section>
  );
}
