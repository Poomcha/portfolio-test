import '../src/styles/index.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
