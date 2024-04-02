import { AppProps } from 'next/app';
import { Bricolage_Grotesque } from 'next/font/google';
import '@/styles/globals.css';

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className={bricolageGrotesque.className}>
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
