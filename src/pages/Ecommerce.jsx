import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/Button";
import { SparklineAreaData, earningData } from "../data/dummy";
import { GoPrimitiveDot } from "react-icons/go";
import SparkLine from "../components/Charts/SparkLine";
import Stacked from "../components/Charts/Stacked";

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white dark:text-gray-200  dark:bg-secondary min-w-[320px] h-44 xl:h-64 rounded-xl w-[95%] xs:w-[80%] p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-left">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-slate-700">درآمدها</p>
              <p className="text-xl text-slate-600">$95,754,35</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="دانلود"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          {earningData.map((item) => (
            <div className="bg-white dark:bg-secondary-dark-bg min-w-[180px] md:w-56 p-4 pt-9 w-full xs:max-w-[220px] rounded-2xl flex flex-col items-center">
              <button
                type="button"
                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg text-gray-700 font-semibold dark:text-gray-100 ">
                  {item.amount}
                </span>
                <span
                  className={`text-sm   ml-2`}
                  style={{ color: item.pcColor }}
                >
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white drak:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl">
          <div className="flex justify-between">
            <p className="font-semibold text-md text-gray-700 dark:text-white">
              به روز رسانی درآمدها
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl cursor-pointer">
                <GoPrimitiveDot className="dark:text-gray-50" />
                <span className="text-sm dark:text-white">هزینه ها</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl cursor-pointer">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="text-sm">بودجه</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-row-reverse gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color dark:border-white m-4 pr-10">
              <div>
                <p className="text-gray-500 mt-1 bg-green-100 rounded-3xl inline-block p-2">
                  بودجه
                </p>
                <p className="mt-1">
                  <span className="text-3xl text-gray-700 font-semibold dark:text-gray-50">
                    $102,345
                  </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    45%
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <p className="text-gray-500 mt-1 bg-green-100 rounded-3xl inline-block p-2">
                  هزینه
                </p>
                <p className="mt-1">
                  <span className="text-3xl text-gray-700 font-semibold dark:text-gray-50">
                    $58,685
                  </span>
                </p>
              </div>
              <div className="mt-5 ltr">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="دانلود گزارش"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className="rtl">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
