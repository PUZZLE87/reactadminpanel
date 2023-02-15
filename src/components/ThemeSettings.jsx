import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed z-[10029] top-o left-0">
      <div className="float-right h-screen  dark:text-gray-100 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg text-slate-700 dark:text-gray-100">
            تنظیمات
          </p>
          <button
            type="button"
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-1 hover:drop-shadow-xl hover:bg-gray-100"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p>گزینه‌های تم</p>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              روشن
            </label>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              تیره
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p>رنگ‌های تم</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
                enableRtl={true}
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                    onClick={(e) => {
                      setColor(item.color);
                    }}
                  >
                    <BsCheck
                      className={` text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
