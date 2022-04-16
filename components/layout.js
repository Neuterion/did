import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }) {
    return (
        <article id="layout">
            <div className="flex flex-col min-h-[100vh]">
                {/* navbar */}
                <Navbar/>

                {/* content goes here */}
                <div className="flex-auto flex justify-center items-center relative">
                    {children}
                </div>
            </div>

            {/* footer */}
            <Footer/>
        </article>
    )
}
