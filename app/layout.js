import {Outfit, Ovo} from 'next/font/google';
import './globals.css';

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Portfolio - Daniel Cyubahiro',
  description: 'Daniel Cyubahiro is a Full-Stack Web Developer passionate about building scalable web applications with clean, efficient code. Check out my projects and open-source contributions!',
};

export default function RootLayout({children}) {
  return (
      <html lang="en">
      <body
          className={`${ovo.className} ${outfit.className}antialiased`}
      >
        {children}
      </body>
      </html>
  );
}
