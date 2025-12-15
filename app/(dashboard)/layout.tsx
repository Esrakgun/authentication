export default function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-[calc(100vh-4rem)] bg-[#fffaf7]">
      {children}
      {modal}
    </main>
  );
}
