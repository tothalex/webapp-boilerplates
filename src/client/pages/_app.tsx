import App, { AppProps, AppContext } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

// This disables the ability to perform automatic static optimization, causing every page in your app to be server-side rendered.
MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
