import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import Header from "../components/Header";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-[#33373E]">
      <Header category="اپلیکیشن‌ها" title="انتخابگر رنگ" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-xl font-semibold mt-2 mb-4 text-gray-600 dark:text-gray-50">
              پالت انتخاب رنگ
            </p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
              enableRtl
            />
          </div>
          <div>
            <p className="text-xl font-semibold mt-2 mb-4 text-gray-600 dark:text-gray-50">
              پالت خطی
            </p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
              enableRtl
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
