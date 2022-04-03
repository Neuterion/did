import { PrismaClient } from '@prisma/client'
import LazyImage from 'react-lazy-blur-image'

export default function Collection({posts}) {
  return (
    <section id="__koleksi" className="flex-[1_1_auto]">
      <div className={`m-4 sm:m-0 sm:mt-5 text-white text-center`}>
        <h1 className={`font-[Fraunces] text-3xl sm:text-4xl`}>
            Koleksi Kami
        </h1>
        <h4 className={`font-[Inter] text-xs sm:text-sm`}>
            Berisi gambar-gambar hasil imajinasi anggota-anggota Drawing Club di SMPN 115.
        </h4>
      </div>
      <div id="posts" className={`block columns-1 xsl:columns-2 sm:columns-3 lg:columns-5 max-w-[100vw] h-max m-4`}>
        {posts.map((post) => {
          return (
            <div key={post.id.toString()} className="h-auto mb-4 break-inside-avoid-column">
              <LazyImage
                placeholder="https://res.cloudinary.com/neuterion/image/upload/v1648816217/imageonline-co-placeholder-image_ovs0wo.jpg"
                uri={post.photo}
                render={(src) => <img src={src} alt="image" onClick={() => {
                  const postDetails = document.getElementById(post.id.toString())
                  postDetails.classList.toggle('hidden')
                  postDetails.firstChild.lastChild.classList.add('header_slide_in')
                  postDetails.firstChild.lastChild.classList.add('appear')
                }}/>
                }
              />
              <section id={post.id.toString()} className="did_post hidden fixed top-0 bottom-0 right-0 left-0 z-50">
                <main className="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-[#000000a2]">
                  <div className="absolute top-5 left-5">
                    <button onClick={() => {
                      const postDetails = document.getElementById(post.id.toString())
                      postDetails.classList.toggle('hidden')
                      postDetails.firstChild.lastChild.classList.remove('header_slide_in')
                      postDetails.firstChild.lastChild.classList.remove('appear')
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                      </svg>              
                    </button>
                  </div>
                  <div className="flex flex-col justify-center items-center max-w-[95ch] text-white text-center">
                    <h1 className="text-4xl sm:text-6xl font-[Fraunces] font-bold">
                      {post.title}
                    </h1>
                    <h3 className="text-xl sm:text-2xl font-[Jost]">
                      - {post.author.name}
                    </h3>
                    <p className="px-12 text-sm sm:text-lg font-[Inter]">
                      {post.desc !== "" && "❝" + post.desc + "❞"}
                    </p>
                  </div>
                </main>
                <style jsx>{`
                  .did_post {
                    background-image: url(${post.photo});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center center;
                  }
                `}</style>
              </section>
            </div>
          )
        })}
      </div>            
    </section>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
        }
      }
    }
  })
  return {
    props: {
      posts,
    },
  }
}
