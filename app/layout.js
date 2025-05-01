import './globals.css';
import {ThemeProvider} from '@/app/components/theme/theme-provider';

export const metadata = {
  title: 'Portfolio - Daniel Cyubahiro',
  description: 'Daniel Cyubahiro is a Full-Stack Web Developer passionate about building scalable web applications with clean, efficient code. Check out my projects and open-source contributions!',
};

export default function RootLayout({children}) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          className={`antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      </html>
  );
}
