import { useInView } from 'react-intersection-observer'

import Image from 'next/image'

import coll1 from '../public/drawings/coll1.jpg'
import coll2 from '../public/drawings/coll2.jpg'
import coll3 from '../public/drawings/coll3.jpg'
import coll4 from '../public/drawings/coll4.jpg'
import coll5 from '../public/drawings/coll5.jpg'
import coll6 from '../public/drawings/coll6.jpg'
import coll7 from '../public/drawings/coll7.jpg'
import coll8 from '../public/drawings/coll8.jpg'
import coll9 from '../public/drawings/coll9.jpg'
import coll10 from '../public/drawings/coll10.jpg'
import coll11 from '../public/drawings/coll11.jpg'
import coll12 from '../public/drawings/coll12.jpg'
import coll13 from '../public/drawings/coll13.jpg'

export default function Collection() {
    const { ref: title, inView: titleInView, entry: titleEntry } = useInView({
      triggerOnce: true,
    })
    const { ref: desc, inView: descInView, entry: descEntry } = useInView({
        triggerOnce: true,
    })

    return (
        <section>
            <div className="m-4 sm:m-0 sm:mt-5 text-white text-center">
                <h1 ref={title} className={`header_slide_in2 ${titleInView ? "appear" : ""} font-[Fraunces] text-3xl sm:text-4xl`}>
                    Koleksi Kami
                </h1>
                <h4 ref={desc} className={`header_slide_in2 ${descInView ? "appear" : ""} font-[Inter] text-xs sm:text-sm`}>
                    Berisi gambar-gambar hasil imajinasi anggota-anggota Drawing Club di SMPN 115.
                </h4>
            </div>
            <div id="koleksi" className={`block columns-1 xsl:columns-2 sm:columns-3 lg:columns-5 max-w-[100vw] h-max m-4`}>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll1} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll2} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll3} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll4} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll5} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll6} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll7} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll8} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll9} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll10} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll11} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll12} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
                <div className="h-auto mb-4 break-inside-avoid-column">
                    <Image src={coll13} placeholder="blur" alt="image" quality="100" layout="responsive"/>
                </div>
            </div>            
        </section>

    )
}
