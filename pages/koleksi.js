import Image from 'next/image'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import styles from '../styles/Collection.module.css'

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
    return <Test/>
}

function Test() {
    return (
        <div className={`flex-[1_1_auto] flex flex-wrap`}>
            <div className={`${styles.column}`}>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll1} placeholder="blur" quality="100" layout="responsive"/>
                </div>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll2} placeholder="blur" quality="100" layout="responsive"/>
                </div>
            </div>
            <div className={`${styles.column}`}>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll5} placeholder="blur" quality="100" layout="responsive"/>
                </div>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll6} placeholder="blur" quality="100" layout="responsive"/>
                </div>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll7} placeholder="blur" quality="100" layout="responsive"/>
                </div>
            </div>
            <div className={`${styles.column}`}>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll8} placeholder="blur" quality="100" layout="responsive"/>
                </div>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll9} placeholder="blur" quality="100" layout="responsive"/>
                </div>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll10} placeholder="blur" quality="100" layout="responsive"/>
                </div>
            </div>
            <div className={`${styles.column}`}>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll11} placeholder="blur" quality="100" layout="responsive"/>
                </div>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll12} placeholder="blur" quality="100" layout="responsive"/>
                </div>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll13} placeholder="blur" quality="100" layout="responsive"/>
                </div>
                <div className={`m-0.5 sm:m-2`}>
                    <Image src={coll3} placeholder="blur" quality="100" layout="responsive"/>
                </div>
            </div>
        </div>
    )
}
