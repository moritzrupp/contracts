import { AppProps } from 'next/app';
// import '../styles/globals.css'
import '../styles/index.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
