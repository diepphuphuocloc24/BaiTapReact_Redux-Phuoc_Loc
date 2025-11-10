import React, { useState } from "react";

const ListSeats = ({ propSeats, onSelectedSeats }) => {
  const [activeSeats, setActiveSeats] = useState([]);

  const handleSelectSeat = (seat) => {
    if (activeSeats.includes(seat.soGhe)) {
      setActiveSeats(activeSeats.filter((s) => s !== seat.soGhe));
    } else {
      setActiveSeats([...activeSeats, seat.soGhe]);
    }

    onSelectedSeats(seat);
  };

  const renderFirstLine = (seatList) => {
    return (
      <div className="flex gap-3">
        {seatList.map((seat) => (
          <div
            key={seat.soGhe}
            className="relative w-10 h-8 flex items-center justify-center transition-all duration-200 active:scale-95"
          >
            <span className="text-black font-bold text-sm">{seat.soGhe}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderSeat = (seatList) => {
    return seatList.map((seat) => {
      if (seat.daDat) {
        return (
          <button
            key={seat.soGhe}
            className="relative flex items-center justify-center transition-all duration-200 active:scale-95 cursor-not-allowed"
            disabled
          >
            <i className="fa-solid fa-couch relative text-red-700 text-[32px]"></i>
            <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
          </button>
        );
      } else {
        return (
          <button
            key={seat.soGhe}
            className="relative flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
            onClick={() => handleSelectSeat(seat)}
          >
            <i
              className={`fa-solid fa-couch relative text-[32px] transition-colors duration-200 ${activeSeats.includes(seat.soGhe)
                ? "text-lime-400"
                : "text-gray-400 hover:text-lime-400"
                }`}
            ></i>
            <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
          </button>
        );
      }
    });
  };

  const renderSeatVIPLine = (seatList) => {
    return seatList.map((seat) => {
      if (seat.daDat) {
        return (
          <button
            key={seat.soGhe}
            className="relative flex items-center justify-center transition-all duration-200 active:scale-95 cursor-not-allowed"
            disabled
          >
            <i className="fa-solid fa-couch relative text-red-700 text-[32px]"></i>
            <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
          </button>
        );
      } else {
        return (
          <button
            key={seat.soGhe}
            className="relative flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
            onClick={() => handleSelectSeat(seat)}
          >
            <i
              className={`fa-solid fa-couch relative text-[32px] transition-colors duration-200 ${activeSeats.includes(seat.soGhe)
                ? "text-lime-400"
                : "text-amber-400 hover:text-lime-400"
                }`}
            ></i>
            <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
          </button>
        );
      }
    });
  };

  const renderSeatLastLine = (seatList) => {
    return seatList.map((seat) => {
      if (seat.daDat) {
        return (
          <button
            key={seat.soGhe}
            className="relative flex items-center justify-center transition-all duration-200 active:scale-95 cursor-not-allowed"
            disabled
          >
            <i className="fa-solid fa-couch relative text-red-700 text-[32px]"></i>
            <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
          </button>
        );
      } else {
        return (
          <button
            key={seat.soGhe}
            className="relative flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
            onClick={() => handleSelectSeat(seat)}
          >
            <i
              className={`fa-solid fa-couch relative text-[32px] transition-colors duration-200 ${activeSeats.includes(seat.soGhe)
                ? "text-lime-400"
                : "text-pink-500 hover:text-lime-400"
                }`}
            ></i>
            <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
          </button>
        );
      }
    });
  };

  const renderColumnSeats = () => {
    return propSeats.map((dataSeats) => {
      if (dataSeats.hang === "") {
        return (
          <div key={dataSeats.hang} className="flex gap-3 justify-center">
            {renderFirstLine(dataSeats.danhSachGhe)}
          </div>
        );
      } else if (dataSeats.hang === "J") {
        return (
          <div key={dataSeats.hang} className="flex gap-3 justify-center">
            {renderSeatLastLine(dataSeats.danhSachGhe)}
          </div>
        );
      } else if (dataSeats.hang === "H" || dataSeats.hang === "I") {
        return (
          <div key={dataSeats.hang} className="flex gap-3 justify-center">
            {renderSeatVIPLine(dataSeats.danhSachGhe)}
          </div>
        );
      } else {
        return (
          <div key={dataSeats.hang} className="flex gap-3 justify-center">
            {renderSeat(dataSeats.danhSachGhe)}
          </div>
        );
      }
    });
  };

  const renderRowSeats = () => {
    return propSeats.map((dataSeats) => {
      return (
        <div
          key={dataSeats.hang}
          className="h-8 flex items-center justify-center font-bold text-black text-sm"
        >
          {dataSeats.hang}
        </div>
      );
    });
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-3 text-black tracking-wide">
        Khu vực chọn ghế
      </h2>

      <div className="flex justify-center gap-5 w-full max-w-3xl">
        <div className="flex flex-col gap-1.5 items-center">{renderRowSeats()}</div>

        <div className="flex flex-col gap-1.5">{renderColumnSeats()}</div>
      </div>
    </div>
  );
};

export default ListSeats;
