import React from 'react'
import LazyImage from 'react-lazy-blur-image'
import { PrismaClient } from '@prisma/client'

export default function T({ post }) {
  return (
    <div id="__main" className="fixed top-0 bottom-0 right-0 left-0 z-50">
      <div className="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-[#000000b6]">
        <div className="absolute top-5 left-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center max-w-[95ch] text-white text-center">
          <h1 className="text-6xl font-[Fraunces] font-bold">
            {post.title}
          </h1>
          <h3 className="text-2xl font-[Jost]">
            - {post.author.name}
          </h3>
          <p className="py-2 text-lg font-[Inter]">
            {post.desc !== "" && "❝" + post.desc + "❞"}
          </p>          
        </div>
      </div>
      <style jsx>{`
        #__main {
          background-image: url(${post.photo});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const post = await prisma.post.findUnique({
    where: {
      id: 4,
    },
    include: {
      author: {
        select: {
          name: true
        }
      }
    }
  })

  return {
      props: {
          post,
      },
  }
}
