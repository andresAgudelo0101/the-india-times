import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<>
  <Component {...pageProps} />
  <footer >
  <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    Powered by{' '}
    <span >
      <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </span>
  </a>
</footer>
</>)
}

export default MyApp
