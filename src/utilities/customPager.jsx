import { useStateContext } from "../contexts/ContextProvider";
import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";

const template = (pagerData, grid) => {
  const { currentMode } = useStateContext();
  const change = (args) => {
    grid.pageSettings.currentPage = args.value;
  };
  return (
    <div className="e-pagertemplate" style={{ display: "flex", gap: "20px" }}>
      <div
        className="control-section"
        style={{ padding: "3px", marginRight: "15px" }}
      >
        <div className="content-wrapper">
          <NumericTextBoxComponent
            min={1}
            max={pagerData.totalPages}
            value={pagerData.currentPage}
            format="###.##"
            change={change}
            style={{ color: currentMode === "Dark" ? "#fff" : "#000" }}
          ></NumericTextBoxComponent>
        </div>
      </div>
      <div
        id="totalPages"
        className="e-pagertemplatemessage"
        style={{
          marginTop: 8,
          marginLeft: 30,
          border: "none",
          display: "inline-block",
        }}
      >
        <span className="e-pagenomsg">
          صفحه {pagerData.currentPage} از {pagerData.totalPages} (
          {pagerData.totalRecordsCount} مورد)
        </span>
      </div>
    </div>
  );
};

export default template;
