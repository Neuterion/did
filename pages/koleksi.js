import React, { useState } from 'react'

import { prisma } from '../lib/prisma'
import Link from 'next/link'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function Collection({ posts }) {
  const [r, setRedir] = useState({r: true, p: '/koleksi'})
  return (
    <section id="__koleksi" className="flex-auto">
      <div className={`m-4 sm:m-0 sm:mt-5 text-white text-center`}>
        <h1 className={`font-fraunces text-3xl sm:text-4xl`}>
            Koleksi Kami
        </h1>
        <h4 className={`font-inter text-xs sm:text-sm`}>
            Berisi gambar-gambar hasil imajinasi anggota-anggota Drawing Club di SMPN 115.
        </h4>
      </div>
      <div id="posts" className={`block columns-1 xsl:columns-2 sm:columns-3 lg:columns-5 max-w-[100vw] h-max m-4`}>
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
      eventId: 0,
    }
  })
  return {
    props: {
      posts,
    },
  }
}
