import Image from "next/image"
import Post from "../components/Post"
import prisma from "../lib/prisma"

export default async function Home() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })
  return (
    <>
      {feed.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
      <Image
        alt="A starry night sky."
        src="https://hakospa200du2.blob.core.windows.net/static-files/arnaud-girault-zWOgtUIX7OE-unsplash.jpg?sp=r&st=2024-05-31T22:23:35Z&se=2024-07-06T06:23:35Z&spr=https&sv=2022-11-02&sr=b&sig=ej2t%2BXRY%2FNGVEowEK3xfzKqrvLa2TbkQntT9zG5VS1Y%3D"
        width={2400}
        height={1400}
        layout="responsive"
      />
    </>
  )
}
