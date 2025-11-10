import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header className="bg-linear-to-r from-indigo-700 via-purple-700 to-pink-600 shadow-xl relative">
                <div className="container mx-auto py-4 flex items-center justify-end relative">
                    <h1
                        className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-extrabold tracking-[0.25em] text-white uppercase drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)]"
                    >
                        FERLOCINE
                    </h1>

                    <div className="flex items-center gap-3 text-white">
                        <span className="font-medium text-base">
                            Xin chào, <span className="font-bold text-amber-200">Phước Lộc</span>
                        </span>

                        <div className="w-15 h-15 rounded-full border-2 border-yellow-300 shadow-md overflow-hidden flex items-center justify-center">
                            <img
                                src="./img/avatarLogo.jpg"
                                alt="Avatar"
                                className="w-17 h-17 object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                            />
                        </div>
                    </div>

                </div>

                <nav className="bg-black/40 backdrop-blur-md border-t border-white/10">
                    <ul className="container mx-auto flex justify-center items-center gap-12 text-white text-base font-semibold uppercase tracking-wide py-4">
                        <li>
                            <a href="#" className="inline-block hover:text-yellow-300 hover:scale-105 transform transition-all duration-300">
                                Giới Thiệu
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-block text-yellow-300 transform scale-105 hover:text-yellow-300 hover:scale-110 transition-all duration-300"
                            >
                                Mua Vé
                            </a>
                        </li>
                        <li><a href="#" className="inline-block hover:text-yellow-300 hover:scale-105 transform transition-all duration-300">Phim Đang Chiếu</a></li>
                        <li><a href="#" className="inline-block hover:text-yellow-300 hover:scale-105 transform transition-all duration-300">Rạp Chiếu Phim</a></li>
                        <li><a href="#" className="inline-block hover:text-yellow-300 hover:scale-105 transform transition-all duration-300">Sự Kiện</a></li>
                        <li><a href="#" className="inline-block hover:text-yellow-300 hover:scale-105 transform transition-all duration-300">Liên Hệ</a></li>
                    </ul>
                </nav>

                <div
                    className="bg-linear-to-r from-pink-700 to-orange-600 text-center text-sm py-2 tracking-wider font-semibold text-yellow-200 shadow-inner"
                >
                    🎬 Lịch chiếu mới nhất & Ưu đãi cực hấp dẫn tại <span className="text-white">FERLOCINE!</span>
                </div>
            </header>
        </div>
    )
}

export default HeaderComponent
