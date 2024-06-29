import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { FormProvider } from '@/context/FormContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cromo Financiamentos",
  description: "Cromo Financiamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Layout>
          <FormProvider>
            {children}
          </FormProvider>
        </Layout>
      </body>
    </html>
  );
}
