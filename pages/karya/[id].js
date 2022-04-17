import { prisma } from '../../lib/prisma'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Post({ post }) {
  const [rotate, setRotate] = useState(false)
  const routerQuery = useRouter().query
  return (
    <section className="flex-auto flex flex-col did_post">
      <main className="flex-auto flex flex-col justify-center items-center">
        <div className="flex-auto flex flex-col px-12 justify-center items-center text-white text-center transition-opacity duration-300">
          <div id={post.id.toString()} className="flex flex-col items-center justify-center mb-10">
            <h1 className="text-4xl sm:text-6xl font-fraunces font-bold">
              {post.title}
            </h1>
            <h3 className="text-xl sm:text-2xl font-jost mb-3">
              - {post.author.name}
            </h3>
            <pre className={`relative p-4 ${post.desc !== '' && "border-2"} border-[#fef08ac6] rounded-bl-lg rounded-tr-lg whitespace-pre-line text-sm sm:text-base text-center font-inter`}>
              {post.desc !== "" && eval('`'+post.desc+'`')}
              {post.desc !== "" && <i className="absolute -top-5 -left-5 fa-solid fa-3x fa-quote-left"/>}
              {post.desc !== "" && <i className="absolute -bottom-5 -right-5 fa-solid fa-3x fa-quote-right"/>}
            </pre>
          </div>
          <img src={post.photo || null} alt={post.title} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[80vh] opacity-0 transition-opacity duration-300 select-none [-webkit-user-drag:none]"/>
        </div>
        {routerQuery.r && <ReturnToPrevPage path={routerQuery.p} />}
        <svg xmlns="http://www.w3.org/2000/svg" className={`absolute top-0 right-5 h-11 w-11 pb-0.5 text-white hover:text-yellow-300 rotate-180 ${rotate ? "rotate-0" : ""} transition duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} role="button" onClick={() =>{
          setRotate(!rotate)
          const desc = document.getElementById(post.id.toString())
          desc.classList.toggle('opacity-0')
          desc.nextSibling.classList.toggle('opacity-100')
        }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </main>
      <style global jsx>{`
        #layout {
          background-image: linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(${post.photo});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
      `}</style>
    </section>
  )
}

export async function getStaticPaths() {
  const postIds = await prisma.post.findMany({
    select: {
      id: true
    }
  })
  return {
    paths: postIds.map(postId => {
      return {
        params: {
          id: postId.id.toString()
        }
      }
    }),
    fallback: false,
  }
}

function ReturnToPrevPage({ path }) {
  return (
    <Link href={path} passHref>
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-5 h-11 w-11 text-white hover:text-yellow-300 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    </Link>
  )
}

export async function getStaticProps({ params }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id)
    },
    include: {
      author: {
        select: {
          name: true
        }
      }
    },
  })
  return {
    props: {
      post,
    },
  }
}
