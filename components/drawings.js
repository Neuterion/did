import Image from 'next/image'
import Img1 from '../public/drawings/img1.jpg'
import Img2 from '../public/drawings/img2.jpg'
import Img3 from '../public/drawings/img3.jpg'

export default function Drawings() {
    return (
        <div className="flex flex-wrap px-3 sm:space-x-3 justify-center">
            <div>
                <Image src={Img1} placeholder="blur" quality="100"></Image>
            </div>
            <div className="hidden lg:flex">
                <Image src={Img2} placeholder="blur" quality="100"></Image>
            </div>
            <div>
                <Image src={Img3} placeholder="blur" quality="100"></Image>
            </div>
        </div>
    )
}
