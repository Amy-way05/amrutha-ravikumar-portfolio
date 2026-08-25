import './globals.css';

export const metadata = {
  title: 'Amrutha Ravikumar | AI/ML Engineer & Data Scientist',
description: 'Portfolio of Amrutha Ravikumar. AI/ML engineering, applied research, and user-centric data solutions.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
