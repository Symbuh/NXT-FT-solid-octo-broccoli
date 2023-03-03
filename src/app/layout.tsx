import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// This is the boilerplate code for adding a global navbar and footer.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main>
          <nav>
            <Link href='/'>Home</Link>
            <Link href='/notes'>Notes</Link>
          </nav>
        </main>
      </body>
    </html>
  );
}
