import '../styles/global.css'

import Header from '../components/Header'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ padding: "0 2rem" }}>
          {children}
        </div>
      </body>
    </html>
  )
}
