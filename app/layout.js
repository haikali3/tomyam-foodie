import './globals.css';
import MainHeader from '../components/main-header/main-header';

export const metadata = {
  title: 'Tomyam Tayar',
  description: 'Enak dimakey begitu saja abe ku!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
