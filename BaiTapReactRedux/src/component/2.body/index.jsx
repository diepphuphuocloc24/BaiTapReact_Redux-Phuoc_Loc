import React, { useState } from "react";
import ListSeats from "./ListSeats";
import { useDispatch, useSelector } from "react-redux";
import {
    addFoodToCart,
    decreaseFoodInCart,
    removeFoodFromCart,
    resetFoodCart,
    selectFoodList,
    selectFoodCart,
} from "./../foodSlice";
import { setArraySeat, resetSeatsCart } from "./../slice";

const BodyComponent = () => {
    const dispatch = useDispatch();

    // Redux seats
    const seatData = useSelector((state) => state.seatsBookingReducer);
    const { seatsList, arrayCart } = seatData;

    // Redux food
    const foodList = useSelector(selectFoodList);
    const foodCart = useSelector(selectFoodCart);

    // Lấy thông tin từ seat để đưa lên store
    const getInforFromListSeats = (selectedSeat) => {
        dispatch(setArraySeat(selectedSeat));
    };

    const renderDataSeats = () => {
        return (
            <div>
                <ListSeats
                    propSeats={seatsList}
                    onSelectedSeats={getInforFromListSeats}
                />
            </div>
        );
    };

    const renderSeatCart = () => {
        return arrayCart.map((seat) => {
            return (
                <div>
                    <div className="flex justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="text-gray-900 font-bold text-lg">{seat.soGhe}</div>

                        <div className="text-red-600 font-extrabold text-lg">
                            {seat.gia.toLocaleString("vi-VN")}₫
                        </div>
                    </div>
                </div>
            );
        });
    };

    // FOOD
    const handleQuantity = (foodName, isIncrease) => {
        if (isIncrease) {
            dispatch(addFoodToCart(foodName));
        } else {
            dispatch(decreaseFoodInCart(foodName));
        }
    };

    const handleRemoveFood = (foodName) => {
        dispatch(removeFoodFromCart(foodName));
    };

    const renderFoodList = () => {
        return foodList.map((food) => (
            <div
                key={food.name}
                className="flex items-center gap-4 mb-4 p-3 bg-gray-800 rounded-lg"
            >
                <img
                    src={food.img}
                    alt={food.name}
                    className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                    <h3 className="text-white text-lg font-bold">{food.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            <button
                                className="w-8 h-8 bg-amber-400 text-gray-800 rounded-md cursor-pointer"
                                onClick={() => handleQuantity(food.name, false)}
                            >
                                -
                            </button>
                            <span className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rounded-md">
                                {food.quantity}
                            </span>
                            <button
                                className="w-8 h-8 bg-amber-400 text-gray-800 rounded-md cursor-pointer"
                                onClick={() => handleQuantity(food.name, true)}
                            >
                                +
                            </button>
                        </div>
                        <h5 className="text-white text-xl font-bold">
                            {food.price.toLocaleString()}đ
                        </h5>
                    </div>
                </div>
            </div>
        ));
    };

    const renderFoodCart = () => {
        return foodCart.map((food) => (
            <div
                key={food.name}
                className="flex justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-xl"
            >
                <div className="text-gray-900 font-bold text-lg">{food.name}</div>
                <div className="flex items-center gap-2">
                    <span className="text-gray-800 font-semibold">Số lượng:</span>
                    <span className="text-blue-600 font-bold">{food.quantity}</span>
                </div>
                <div className="text-red-600 font-extrabold text-lg">
                    {(food.price * food.quantity).toLocaleString("vi-VN")}₫
                </div>
            </div>
        ));
    };

    // TÍNH TIỀN VÉ
    const calculateTotalPriceSeat = () => {
        return arrayCart.reduce((totalPrice, seat) => {
            return totalPrice + seat.gia;
        }, 0);
    };

    // TÍNH TIỀN ĐỒ ĂN
    const calculateTotalPriceFood = () => {
        return foodCart.reduce((totalPrice, food) => {
            return totalPrice + food.price * food.quantity;
        }, 0);
    };

    // TÔNG TIỀN
    const calculateTotalPrice = () => {
        return calculateTotalPriceSeat() + calculateTotalPriceFood();
    };

    const handleCancel = () => {
        dispatch(resetFoodCart());
        dispatch(resetSeatsCart());
    };

    const handleCheckOut = () => {
        dispatch(resetFoodCart());
        dispatch(resetSeatsCart());
        alert("Thanh toán thành công. Cảm ơn bạn đã lựa chọn rạp FerLOCine!");
    };

    return (
        <>
            <section className="w-[75%] mx-auto pt-10">
                <div className="flex flex-col gap-10">
                    {/* THÔNG TIN PHIM */}
                    <div className="flex-1 overflow-hidden rounded-xl border-2 border-gray-300 shadow-md relative">
                        <img
                            src="./img/bg-image-1.jpg"
                            alt="poster"
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-3xl z-10">
                            <button
                                data-modal-target="default-modal"
                                data-modal-toggle="default-modal"
                                className="w-16 h-16 bg-amber-400/40 rounded-full transition-transform duration-300 hover:scale-125 cursor-pointer flex items-center justify-center"
                            >
                                <i className="fa-solid fa-play"></i>
                            </button>
                        </div>

                        <div className="absolute bottom-3 left-3 flex items-end gap-5 z-10">
                            <img
                                src="./img/poster.png"
                                alt="overlay"
                                className="w-40 border border-gray-300 rounded"
                            />

                            <div className="flex flex-col gap-3 text-white">
                                <h2 className="text-xl md:text-3xl font-bold leading-snug">
                                    Quái thú vô hình: Vùng đất chết chóc
                                </h2>
                                <h3 className="text-lg md:text-2xl font-semibold text-gray-200">
                                    Predator: Badlands (2025)
                                </h3>

                                <p className="flex items-center justify-center bg-amber-500 text-white text-3xl font-bold w-18 h-10 rounded-md shadow-md">
                                    T16
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* NỘI DUNG PHIM */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                        <h2 className="text-3xl font-extrabold text-black mb-4 border-b-2 border-amber-400 pb-2">
                            Nội Dung Phim
                        </h2>
                        <p className="text-gray-800 leading-relaxed text-lg">
                            Trong tương lai, tại một hành tinh hẻo lánh, một Predator non nớt
                            - kẻ bị chính tộc của mình ruồng bỏ - tìm thấy một đồng minh không
                            ngờ tới là Thia và bắt đầu hành trình sinh tử nhằm truy tìm kẻ thù
                            tối thượng. Bộ phim do Dan Trachtenberg - đạo diễn của Prey chỉ
                            đạo và nằm trong chuỗi thương hiệu Quái Thú Vô Hình Predator.
                        </p>
                    </div>

                    {/* MODAL VIDEO */}
                    <div
                        id="default-modal"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full h-full max-h-full"
                    >
                        <div className="relative p-4 w-full max-w-2xl h-[500px] mx-auto">
                            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-full flex items-center justify-center">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/cDL3Zjdz514?si=YH_PVNg-lQo_ixh_"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* ĐẶT GHẾ */}
                        <div className="bg-gray-200 p-6 rounded-xl shadow-lg">
                            <h3 className="flex items-center gap-3 text-gray-800 text-3xl font-bold">
                                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400 border-2 border-black text-black font-bold">
                                    1
                                </span>
                                Chọn ghế
                            </h3>

                            <div className="bg-white p-2 mt-4 rounded">
                                <div className="relative mx-auto w-4/5 text-center text-white font-extrabold text-2xl tracking-wider">
                                    <div className="w-full h-0 border-b-50 border-b-amber-400 border-l-50 border-l-transparent border-r-50 border-r-transparent drop-shadow-xl rounded-t-lg"></div>
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        MÀN HÌNH
                                    </span>
                                </div>

                                <div className="flex justify-between items-end w-full bg-white text-gray-800 pt-5 rounded-2xl shadow-md">
                                    <div className="flex flex-col items-center gap-5">
                                        <div className="bg-green-500 text-white w-10 h-5 flex items-center justify-center text-xs font-semibold rounded-sm">
                                            EXIT
                                        </div>
                                        <div className="w-16 h-[500px] bg-gray-800 flex items-center justify-center rounded-md">
                                            <span className="text-sm rotate-90 text-white">
                                                Lối vào
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-24 h-[500px] bg-linear-to-b from-red-500 to-red-700 flex items-center justify-center rounded-lg shadow-lg border border-red-800">
                                        <span className="text-sm rotate-90 text-white font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                                            Bậc thang
                                        </span>
                                    </div>

                                    <div className="w-full h-[500px] p-3 bg-white rounded-2xl shadow-inner border border-gray-300">
                                        {renderDataSeats()}
                                    </div>

                                    <div className="w-24 h-[500px] bg-linear-to-b from-red-500 to-red-700 flex items-center justify-center rounded-lg shadow-lg border border-red-800">
                                        <span className="text-sm -rotate-90 text-white font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                                            Bậc thang
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-center gap-5">
                                        <div className="bg-green-500 text-white w-10 h-5 flex items-center justify-center text-xs font-semibold rounded-sm">
                                            EXIT
                                        </div>
                                        <div className="w-16 h-[500px] bg-gray-800 flex items-center justify-center rounded-md">
                                            <span className="text-sm -rotate-90 text-white">
                                                Lối vào
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <p className="text-black font-bold italic text-center ">
                                        Xin lưu ý rằng hệ thống không cho phép bạn để một ghế trống
                                        đơn lẻ giữa các ghế được chọn.
                                    </p>
                                    <p className="text-black font-bold italic text-center ">
                                        Ghế Couple bắt buộc đặt cả 2 ghế.
                                    </p>
                                </div>

                                <div className="flex justify-center items-center gap-12 my-5">
                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-couch text-gray-500 text-lg"></i>
                                        <span className="text-black font-bold text-sm">
                                            Standard
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-couch text-lime-500 text-lg"></i>
                                        <span className="text-black font-bold text-sm">
                                            Ghế bạn chọn
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-couch text-amber-400 text-lg"></i>
                                        <span className="text-black font-bold text-sm">
                                            Ghế VIP
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-couch text-pink-600 text-lg"></i>
                                        <span className="text-black font-bold text-sm">
                                            Ghế Couple
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-couch text-red-600 text-lg"></i>
                                        <span className="text-black font-bold text-sm">Đã đặt</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MÓN ĂN KÈM VÀ BILL */}
                        <div className="flex justify-between items-stretch gap-5">
                            <div className="flex-1 flex flex-col bg-gray-200 p-6 rounded-xl shadow-lg">
                                <h3 className="flex items-center gap-3 text-gray-800 text-3xl font-bold">
                                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400 border-2 border-black text-black font-bold">
                                        2
                                    </span>
                                    Đồ ăn & thức uống<span className="text-xl">(Tùy chọn)</span>
                                </h3>

                                <div className="bg-gray-900 p-4 mt-4 rounded-2xl shadow-lg">
                                    {renderFoodList()}
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col bg-gray-200 p-6 rounded-xl shadow-lg">
                                <h3 className="flex items-center gap-3 text-gray-800 text-3xl font-bold">
                                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400 border-2 border-black text-black font-bold">
                                        3
                                    </span>
                                    Thanh toán
                                </h3>

                                {/* BILL TÍNH TIỀN */}
                                <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md mt-4">
                                    {/* Ghế đã chọn */}
                                    <div className="flex flex-col border p-3 rounded-lg bg-white">
                                        <div className="font-semibold text-gray-700 mb-2">
                                            Ghế đã chọn
                                        </div>
                                        <div className="flex flex-col gap-2 text-black h-20 max-h-20 overflow-y-auto">
                                            {renderSeatCart()}
                                        </div>
                                    </div>

                                    {/* Đồ ăn & thức uống */}
                                    <div className="flex flex-col border p-3 rounded-lg bg-white">
                                        <div className="font-semibold text-gray-700 mb-2">
                                            Đồ ăn & thức uống
                                        </div>
                                        <div className="flex flex-col gap-2 text-black h-20 max-h-20 overflow-y-auto">
                                            {renderFoodCart()}
                                        </div>
                                    </div>

                                    {/* Tổng tiền */}
                                    <div className="flex justify-between items-center p-4 bg-cyan-100 rounded-xl shadow-md font-bold text-black">
                                        <span className="text-lg">Tổng tiền</span>
                                        <span className="text-2xl font-extrabold text-red-600">
                                            {calculateTotalPrice().toLocaleString()}₫
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[75%] mx-auto flex justify-between items-center gap-5 py-5">
                <div className="flex-1"></div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <button
                            className="text-white text-lg font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
                            onClick={handleCancel}
                        >
                            HỦY ĐẶT VÉ
                        </button>

                        <button
                            className="bg-linear-to-r from-indigo-500 to-purple-500 text-white text-base font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            onClick={handleCheckOut}
                        >
                            Thanh toán
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* COMMENT FACEBOOK */}
            <section className="w-[50%] mx-auto flex justify-center py-5">
                <div className="w-full bg-white rounded-2xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Bình luận</h2>

                    {/* New comment input */}
                    <div className="flex gap-3 items-start mb-6">
                        <img
                            src="./img/avar6.webp"
                            alt="avatar"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div className="flex-1">
                            <textarea
                                rows={2}
                                className="w-full text-sm text-gray-800 resize-none border border-gray-300 rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm"
                                placeholder="Viết bình luận...">
                                FLop quá thì ghi tên anh vào
                            </textarea>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <button className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-gray-100 transition">📷 <span>Ảnh</span></button>
                                    <button className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-gray-100 transition">👽 <span>Emoji</span></button>
                                </div>
                                <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-emerald-700 transition cursor-pointer">
                                    Đăng bình luận
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr className="my-4 border-gray-200" />

                    {/* Comments list */}
                    <ul className="space-y-5">
                        {/* Comment 1 */}
                        <li className="flex gap-3">
                            <img src="./img/avar4.jpg" alt="avatar" className="w-12 h-12 rounded-full border" />
                            <div className="flex-1">
                                <div className="bg-gray-100 rounded-2xl p-3 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-sm text-gray-800">Nguyễn Văn A</span>
                                            <span className="text-xs text-gray-500">· 1 giờ</span>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 text-sm">•••</button>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-800">
                                        Coi xong tôi ra sân sau tưới cây mà cứ tưởng Predator đang bật chế độ tàng hình rình mình 😭🌿.
                                        Phim này mà xem buổi tối chắc khỏi ngủ luôn!
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                    <button className="flex items-center gap-1 hover:text-red-500">
                                        <i className="fa-solid fa-heart text-red-500"></i> Thích
                                    </button>
                                    <button className="hover:text-gray-700">Chia sẻ</button>
                                    <span className="ml-auto text-xs text-gray-400">54 lượt tym</span>
                                </div>
                            </div>
                        </li>

                        {/* Comment 2 */}
                        <li className="flex gap-3">
                            <img src="./img/avar3.jpg" alt="avatar" className="w-12 h-12 rounded-full border" />
                            <div className="flex-1">
                                <div className="bg-gray-100 rounded-2xl p-3 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-sm text-gray-800">Trần Thị B</span>
                                            <span className="text-xs text-gray-500">· 2 giờ</span>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 text-sm">•••</button>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-800">
                                        Predator mà đi hẹn hò chắc chỉ chọn nhà hàng... trong rừng 😆🌲.
                                        Nhưng công nhận phim cháy thật, hiệu ứng nhìn sướng mắt luôn!
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                    <button className="flex items-center gap-1 hover:text-red-500">
                                        <i className="fa-solid fa-heart text-red-500"></i> Thích
                                    </button>
                                    <button className="hover:text-gray-700">Chia sẻ</button>
                                    <span className="ml-auto text-xs text-gray-400">39 lượt tym</span>
                                </div>
                            </div>
                        </li>

                        {/* Comment 3 */}
                        <li className="flex gap-3">
                            <img src="./img/avar5.webp" alt="avatar" className="w-12 h-12 rounded-full border" />
                            <div className="flex-1">
                                <div className="bg-gray-100 rounded-2xl p-3 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-sm text-gray-800">Lê Minh C</span>
                                            <span className="text-xs text-gray-500">· 5 giờ</span>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 text-sm">•••</button>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-800">
                                        Tôi mà gặp Predator ngoài đời chắc không chạy, mà xin selfie một tấm cho viral TikTok luôn 🤳👽🔥.
                                        Phim này đúng kiểu “chạy là thua” luôn rồi!
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                    <button className="flex items-center gap-1 hover:text-red-500">
                                        <i className="fa-solid fa-heart text-red-500"></i> Thích
                                    </button>
                                    <button className="hover:text-gray-700">Chia sẻ</button>
                                    <span className="ml-auto text-xs text-gray-400">61 lượt tym</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
};

export default BodyComponent;
