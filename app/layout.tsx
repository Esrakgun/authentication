import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Editorial Books",
  description: "A curated editorial book collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
          suppressHydrationWarning
        >
          {/* FULL WIDTH HEADER */}
          <header className="w-full border-b border-gray-200">
            <div className="relative w-full h-16 flex items-center justify-between px-8">

              {/* LEFT – STATIC NAV */}
              <nav className="flex items-center gap-8 text-sm text-gray-600">
                <span className="cursor-default">Collection</span>
                <span className="cursor-default">Stories</span>
                <span className="cursor-default">Learn</span>
              </nav>

              {/* CENTER – LOGO */}
              <div className="absolute left-1/2 -translate-x-1/2 text-sm tracking-[0.35em] font-medium">
                EDITORIAL
              </div>

              {/* RIGHT – SUPPORT + AUTH */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <span className="cursor-default">Support</span>

                <SignedOut>
                  <SignInButton>
                    <button className="hover:text-gray-900 transition">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton>
                    <button className="rounded-full bg-[#6c47ff] px-4 py-2 text-white text-xs font-medium hover:opacity-90 transition">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                      },
                    }}
                    afterSignOutUrl="/"
                  />
                </SignedIn>
              </div>

            </div>
          </header>

          {/* PAGE CONTENT */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
