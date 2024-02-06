// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }) {
  return (
    <>
      {/* Other global components can go here */}
      <ToastContainer />

      {/* The rest of your app */}
      <Component {...pageProps} />
    </>
  );
}

export default App