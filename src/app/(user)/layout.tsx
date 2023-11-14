import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
<div className="min-h-screen">
<Header />
      {children}
</div>
      <Footer />
    </div>
  );
}
