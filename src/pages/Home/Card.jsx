import { useEffect } from "react";
import Club from "./Card/Club";
import Spade from "./Card/Spade";
import Diamond from "./Card/Diamond";
import Heart from "./Card/Heart";
import { dragonStyle, tigerStyle } from "../../static";
import { playCardSound } from "../../utils/sound";

const Card = ({
  styleIndex,
  setStyleIndex,
  showCardAnimation,
  winCard,
  totalWinAmount,
  multiplier,
  isAnimationEnd,
}) => {
  const cardNumber = winCard?.card && parseFloat(winCard?.card?.substring(1));

  useEffect(() => {
    if (styleIndex?.dragon <= 0 && showCardAnimation) {
      const timer = setTimeout(() => {
        setStyleIndex((prev) => {
          return {
            ...prev,
            dragon: prev.dragon + 1,
          };
        });
      }, 400);
      return () => clearTimeout(timer);
    }
    if (styleIndex?.tiger <= 0 && showCardAnimation) {
      const timer = setTimeout(() => {
        playCardSound();
        setStyleIndex((prev) => {
          return {
            ...prev,
            tiger: prev.tiger + 1,
          };
        });
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [styleIndex, setStyleIndex, showCardAnimation]);

  return (
    <>
      {/* {isAnimationEnd && (
        <>
          {cardNumber > 7 ? (
            <span
              className="absolute z-50 flex items-center justify-center gap-1 px-2 py-1 text-sm font-medium text-black rounded lg:text-lg whitespace-nowrap "
              style={{
                transform: "translateY(-105%) translateZ(52px) translateX(50%)",
                right: "40%",
                top: "48%",
                backgroundColor: "rgb(0, 231, 0)",
              }}
            >
              7 Up
            </span>
          ) : cardNumber < 7 ? (
            <span
              className="absolute z-50 flex items-center justify-center gap-1 px-2 py-1 text-sm font-medium text-black rounded lg:text-lg whitespace-nowrap "
              style={{
                transform: "translateY(-105%) translateZ(52px) translateX(50%)",
                right: "40%",
                top: "48%",
                backgroundColor: "rgb(255, 55, 95)",
              }}
            >
              7 Down
            </span>
          ) : (
            <span
              className="absolute z-50 flex items-center justify-center gap-1 px-2 py-1 text-sm font-medium text-black rounded lg:text-lg whitespace-nowrap "
              style={{
                transform: "translateY(-105%) translateZ(52px) translateX(50%)",
                right: "40%",
                top: "48%",
                backgroundColor: "rgb(59, 130, 246)",
              }}
            >
              7
            </span>
          )}
        </>
      )} */}

      {/* {isAnimationEnd && totalWinAmount !== 0 && (
        <div
          style={{
            position: "absolute",
            transform: "translateY(-105%) translateZ(52px) translateX(50%)",
            right: "55%",
            top: "45%",
          }}
          className="flex flex-col items-center justify-center gap-1 px-2 py-1 border-2 rounded border-stakeGreen bg-zinc-800 animate__faster animate__zoomIn animate__animated z-50"
        >
          <div className="flex flex-col items-center justify-center font-mono">
            <span className="text-xl font-semibold tracking-tighter text-stakeGreen md:text-3xl">
              x{multiplier}
            </span>
            <div className="w-full h-0.5 bg-white/5" />
            <span className="text-sm font-semibold tracking-tighter text-stakeGreen/80 md:text-xl">
              <span>₹{totalWinAmount}</span>
            </span>
          </div>
        </div>
      )} */}

      {/* Dragon Start */}
      <div
        className={`relative border-2 shadow-sm transition-all ease-in-out duration-200 h-24 lg:h-40 aspect-[5/7] rounded bg-white ${
          styleIndex.dragon === 1 && isAnimationEnd ? "border-stakeGreen" : ""
        }`}
        style={{
          ...dragonStyle[styleIndex?.dragon],
        }}
      >
        {winCard?.suit === "H" && <Heart rank={winCard?.rank} />}
        {winCard?.suit === "C" && <Club rank={winCard?.rank} />}
        {winCard?.suit === "S" && <Spade rank={winCard?.rank} />}
        {winCard?.suit === "D" && <Diamond rank={winCard?.rank} />}
      </div>
      {/* Dragon End */}

      {/* Tiger Start */}
      <div
        className={`relative border-2 shadow-sm transition-all ease-in-out duration-200 h-24 lg:h-40 aspect-[5/7] rounded bg-white ${
          styleIndex.tiger === 1 && isAnimationEnd ? "border-stakeGreen" : ""
        }`}
        style={{
          ...tigerStyle[styleIndex?.tiger],
        }}
      >
        {winCard?.suit === "H" && <Heart rank={winCard?.rank} />}
        {winCard?.suit === "C" && <Club rank={winCard?.rank} />}
        {winCard?.suit === "S" && <Spade rank={winCard?.rank} />}
        {winCard?.suit === "D" && <Diamond rank={winCard?.rank} />}
      </div>
      {/* Tiger End */}
    </>
  );
};

export default Card;
