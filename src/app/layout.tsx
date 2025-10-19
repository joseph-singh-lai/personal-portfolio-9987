import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Joseph Singh - Full Stack Developer",
  description: "Portfolio of Joseph Singh, a Full-Stack Developer & AI Integration Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
}
