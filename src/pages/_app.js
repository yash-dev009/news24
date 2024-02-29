// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/header/header';

function App({ Component, pageProps }) {
  return (
    <>
      {/* Other global components can go here */}
      <ToastContainer />
<Header />
      {/* The rest of your app */}
      <div style={{marginTop:"100px"}} >
      <Component {...pageProps} />

      </div>
    </>
  );
}

export default App