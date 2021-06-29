import { ThemeProvider } from 'next-themes';
import '@moai/core/dist/bundle.css';
import '@moai/core/dist/font/remote.css';
import '../styles/globals.css';
import '../theme/theme.css';
import '../theme/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        storageKey="theme"
        themes={['light', 'dark']}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
