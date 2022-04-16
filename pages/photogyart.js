import { prisma } from '../lib/prisma'
import Link from 'next/link'

export default function Collection({ posts }) {
  return (
    <section id="__koleksi" className="flex-auto">
      <div className={`m-4 sm:m-0 sm:mt-5 text-white text-center`}>
        <h1 className={`font-fraunces text-3xl sm:text-4xl`}>
            Insight In Photogyart
        </h1>
      </div>
      <div id="posts" className={`block columns-1 xsl:columns-2 sm:columns-3 lg:columns-5 max-w-[100vw] h-max m-4`}>
        {posts.map((post) => {
          return (
            <div key={post.id.toString()} className="h-auto mb-4 break-inside-avoid-column">
              <Link href={`/karya/${encodeURIComponent(post.id)}`} passHref>
                <img src={post.photo} alt={post.title}/>
              </Link>
            </div>
          )
        })}
      </div>            
    </section>
  )
}

export async function getStaticProps() {
  const posts = await prisma.post.findMany({
    where: {
      eventId: 2,
    }
  })
  return {
    props: {
      posts,
    },
  }
}
