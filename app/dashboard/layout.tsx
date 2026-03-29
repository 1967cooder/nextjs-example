export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>
        <strong>Dashboard Layout</strong>
      </h2>
      {children}
    </div>
  );
}
