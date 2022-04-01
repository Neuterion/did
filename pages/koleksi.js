import { PrismaClient } from '@prisma/client'
import { useInView } from 'react-intersection-observer'
import LazyImage from 'react-lazy-blur-image'

import Image from 'next/image'

export default function Collection({posts}) {
    const { ref: title, inView: titleInView, entry: titleEntry } = useInView({
      triggerOnce: true,
    })

    return (
        <section>
            <div ref={title} className={`header_slide_in2 ${titleInView ? "appear" : ""} m-4 sm:m-0 sm:mt-5 text-white text-center`}>
                <h1 className={`font-[Fraunces] text-3xl sm:text-4xl`}>
                    Koleksi Kami
                </h1>
                <h4 className={`font-[Inter] text-xs sm:text-sm`}>
                    Berisi gambar-gambar hasil imajinasi anggota-anggota Drawing Club di SMPN 115.
                </h4>
            </div>
            
            <div id="koleksi" className={`block columns-1 xsl:columns-2 sm:columns-3 lg:columns-5 max-w-[100vw] h-max m-4`}>
                {posts.map((post) => (
                    <div key={post.id.toString()} className="h-auto mb-4 break-inside-avoid-column">
                        <LazyImage placeholder="https://via.placeholder.com/500.jpg/555/555" uri={post.photo} render={(src) => <img src={src} alt="image"/>}/>
                    </div>
                ))}
            </div>            
        </section>

    )
}

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const posts = await prisma.post.findMany()

    return {
        props: {
            posts,
        },
    }
}
