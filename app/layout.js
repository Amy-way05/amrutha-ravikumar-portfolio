import './globals.css';

export const metadata = {
  title: 'Amrutha Ravikumar | ML Research Analyst & Data Scientist',
  description: 'Portfolio of Amrutha Ravikumar. ML research, data pipelines, and user-centric analytics.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
