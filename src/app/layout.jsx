import '../styles/global.css'

import Header from '../components/Header'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ padding: "0 2rem" }}>
          <Image
            alt="A humble cottage in the woods."
            src="https://hakospa200du2.blob.core.windows.net/static-files/peter-thomas-QsjKrm2eeM4-unsplash.jpg?sp=r&st=2024-05-31T22:27:36Z&se=2024-06-29T06:27:36Z&spr=https&sv=2022-11-02&sr=b&sig=E5G2ltWvghnE3CAaVYrOwQDf7mg3t814bR4ucgYSJb0%3D"
            width={2400}
            height={1400}
            layout="responsive"
          />
          {children}
        </div>
      </body>
    </html>
  )
}
