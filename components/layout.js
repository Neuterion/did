import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <div className="flex-auto flex justify-center items-center">
                {children}
            </div>
            <Footer/>
        </>
    )
}
