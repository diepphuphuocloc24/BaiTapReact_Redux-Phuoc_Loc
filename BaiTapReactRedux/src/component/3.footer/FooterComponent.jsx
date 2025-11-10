import React from 'react'

const FooterComponent = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white border-t border-gray-800">
                <div className="container mx-auto py-10 flex flex-col lg:flex-row justify-center gap-10 text-sm">
                    <div className="flex-1">
                        <h4 className="font-semibold mb-3 text-yellow-400 uppercase">Về FERLOCINE</h4>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            FERLOCINE là nền tảng đặt vé trực tuyến hiện đại, mang đến trải nghiệm mua vé nhanh chóng, tiện lợi và an toàn.
                            Luôn cập nhật đầy đủ các suất chiếu, chương trình khuyến mãi và sự kiện điện ảnh hấp dẫn nhất, giúp bạn không bỏ lỡ bộ phim yêu thích.
                        </p>

                        <div className="flex items-center gap-4 mt-4">
                            <a href="#" className="transition transform hover:scale-110">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" alt="Facebook" className="h-6" />
                            </a>

                            <a href="#" className="transition transform hover:scale-110">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6" />
                            </a>

                            <a href="#" className="transition transform hover:scale-110">
                                <img src="https://img.freepik.com/vector-cao-cap/logo-tik-tok_578229-290.jpg?semt=ais_hybrid&w=740&q=80" alt="TikTok" className="h-6" />
                            </a>

                            <a href="#" className="transition transform hover:scale-110">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" className="h-6" />
                            </a>
                        </div>

                    </div>

                    <div className="flex-1">
                        <h4 className="font-semibold mb-3 text-yellow-400 uppercase">Hướng dẫn &amp; Chính sách</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-yellow-300">Hướng dẫn đặt vé</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Chính sách bảo mật</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Điều khoản sử dụng</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Liên hệ hỗ trợ</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Tuyển dụng</a></li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h4 className="font-semibold mb-3 text-yellow-400 uppercase">Liên hệ &amp; Hỗ trợ</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <span className="font-medium">Hotline đặt vé:</span> 1900 1234
                            </li>
                            <li>
                                <span className="font-medium">Email: </span>
                                <a href="mailto:sample@cinema.com" className="text-pink-400 hover:text-pink-300">
                                    sample@cinema.com
                                </a>
                            </li>
                            <li>
                                <span className="font-medium">Địa chỉ:</span> 123 Phố Giả Lập, Quận Mẫu, TP. Demo
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-black text-white text-center py-3 border-t border-gray-700">
                    © 2025 FERLOCINE. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default FooterComponent
