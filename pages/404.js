export default function Custom404() {
    {/* 404 text positioned in the center of viewport */}
    return (
        <div className="flex justify-center items-center font-inter text-center text-white">
            <div className="break-all xxs:break-normal">
                <h1 className="font-bold text-2xl xxs:text-4xl xs:text-6xl">
                    404
                </h1>
                <h2 className="text-xs xxs:text-sm xs:text-base">
                    Halaman tidak ditemukan.
                </h2>
            </div>
        </div>
    )
}