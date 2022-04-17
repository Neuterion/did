import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { prisma } from '../lib/prisma'

import Link from 'next/link'


export default function Collection({ posts, topPosts }) {
  const [r, setRedir] = useState({r: true, p: '/drawry'})
  const colCount = topPosts.length
  return (
    <section id="__koleksi" className="flex-auto">
      <div className={`m-4 sm:m-0 sm:mt-5 text-white text-center`}>
        <h1 className={`font-fraunces text-3xl sm:text-4xl`}>
            Draw From A Story
        </h1>
        <p className="px-2 font-jost">
          Pencet gambar untuk membuka deskripsinya.
        </p>
      </div>
      <div id="top-posts" className={`grid items-center justify-items-center gap-4 m-4 grid-cols-1`}>
        {topPosts.map((post) => {
          let trophyCol
          let borderCol
          if (post.rank === 1) {
            trophyCol = 'text-[#FFD700]'
            borderCol = 'border-[#FFD700]'
          } else if (post.rank === 2) {
            trophyCol = 'text-[#C0C0C0]'
            borderCol = 'border-[#C0C0C0]'
          } else {
            trophyCol = 'text-[#CD7F32]'
            borderCol = 'border-[#CD7F32]'
          }
          return (
            <div key={post.id.toString()} className="relative">
              <Link href={{pathname: `/karya/${encodeURIComponent(post.id)}`, query: r}} passHref>
                <LazyLoadImage src={post.photo} alt={post.title} effect="blur" placeholderSrc="https://res.cloudinary.com/neuterion/image/upload/v1648816217/imageonline-co-placeholder-image_ovs0wo.jpg" className={`cursor-pointer border-2 ${borderCol}`} />
              </Link>
              <i className={`absolute -bottom-0.5 fa-solid fa-trophy fa-2x right-1/2 translate-x-1/2 ${trophyCol}`}></i>
            </div>
          )
        })}
        <style jsx>{`
          @media (min-width: 640px) {  
            #top-posts {
              grid-template-columns: repeat(${colCount}, minmax(0, 1fr));
            }
          }
        `}</style>
      </div>
      <div id="posts" className={`block pt-4 m-4 columns-1 xsl:columns-2 sm:columns-3 lg:columns-5 max-w-[100vw] h-max border-t-2 border-dashed border-[#ffffff8a]`}>
        {posts.map((post) => {
          return (
            <div key={post.id.toString()} className="h-auto mb-4 break-inside-avoid-column">
              <Link href={{pathname: `/karya/${encodeURIComponent(post.id)}`, query: r}} passHref>
                <LazyLoadImage src={post.photo} alt={post.title} effect="blur" placeholderSrc="https://res.cloudinary.com/neuterion/image/upload/v1648816217/imageonline-co-placeholder-image_ovs0wo.jpg" className="cursor-pointer" />
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
      eventId: 1,
      rank: 0,
    }
  })
  const topPosts = await prisma.post.findMany({
    where: {
      eventId: 1,
      rank: {
        not: 0,
      }
    },
    orderBy: {
      rank: 'asc',
    }
  })
  return {
    props: {
      posts,
      topPosts,
    },
  }
}
