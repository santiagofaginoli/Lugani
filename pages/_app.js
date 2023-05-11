import '../styles/globals.scss'
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { useId } from "@react-aria/utils";
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider  >
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;