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
