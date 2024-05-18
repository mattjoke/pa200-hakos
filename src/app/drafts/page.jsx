import Image from 'next/image'
import Post from '../../components/Post'
import React from 'react'
import prisma from '../../lib/prisma'
import styles from '../../styles/Drafts.module.css'

const Drafts = async () => {
  const drafts = await prisma.post.findMany({
    where: { published: false },
    include: { author: true },
  })
  return (
    <>
      <div>
        <h1>Drafts</h1>
        <Image
          alt="A humble cottage in the woods."
          src="https://hakospa200du2.blob.core.windows.net/static-files/peter-thomas-QsjKrm2eeM4-unsplash.jpg?sp=r&st=2024-05-31T22:27:36Z&se=2024-06-29T06:27:36Z&spr=https&sv=2022-11-02&sr=b&sig=E5G2ltWvghnE3CAaVYrOwQDf7mg3t814bR4ucgYSJb0%3D"
          width={2400}
          height={1400}
          layout="responsive"
        />
        <main>
          {drafts.map((post) => (
            <div key={post.id} className={styles.post}>
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </>
  )
}

export default Drafts
