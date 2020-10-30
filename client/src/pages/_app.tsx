import App, { AppProps, AppContext } from 'next/app'

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

// This disables the ability to perform automatic static optimization, causing every page in your app to be server-side rendered.
/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
