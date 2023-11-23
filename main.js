let L1 = document.querySelector(".L1");
let L2 = document.querySelector(".L2");
let L3 = document.querySelector(".L3");
let inpUnit = document.querySelector("#unit");
let outAreaM = document.querySelector("#area_As_Meter");
let outAreaCM = document.querySelector("#area_As_CM");
let outAreaFt = document.querySelector("#area_As_Ft");
let outAreaUnitM = document.querySelector("#area_Unit_As_Meter");
let outAreaUnitCM = document.querySelector("#area_Unit_As_CM");
let outAreaUnitFt = document.querySelector("#area_Unit_As_Ft");
let outScopeM = document.querySelector("#scope_As_Meter");
let outScopeCM = document.querySelector("#scope_As_CM");
let outScopeFt = document.querySelector("#scope_As_Ft");
let outScopeUnitM = document.querySelector("#scope_Unit_As_Meter");
let outScopeUnitCM = document.querySelector("#scope_Unit_As_CM");
let outScopeUnitFt = document.querySelector("#scope_Unit_As_Ft");
let traingleCountBtn = document.querySelector("#traingle_Count");
let traingelresultBox = document.querySelector(".traingle_Result");

const meterToFt = (m) => (m * 3.28).toFixed(2);
const meterToCM = (m) => (m * 100).toFixed(2);
const sqMeterToSqFt = (sqm) => (sqm * 10.7639).toFixed(2);
const sqMeterToSqCM = (sqm) => (sqm * 10000).toFixed(2);
const ftToMeter = (ft) => (ft / 3.28).toFixed(2);
const ftToCm = (cm) => (cm * 30.48).toFixed(2);
const sqFtToSqCM = (sqft) => (sqft * 929).toFixed(2);
const sqFtToSqMeter = (sqft) => (sqft / 10.7639).toFixed(2);
const cmToMeter = (cm) => (cm / 100).toFixed(2);
const cmToFt = (cm) => (cm / 30.48).toFixed(2);
const sqCmToSqFt = (sqcm) => (sqcm / 929).toFixed(2);
const sqCmToSqMeter = (sqcm) => (sqcm / 10000).toFixed(2);
traingleCountBtn.addEventListener("click", function () {
  let a = Number(L1.value);
  let b = Number(L2.value);
  let c = Number(L3.value);
  let inputUnit = inpUnit.value;
  let scope = a + b + c;
  let s = scope / 2;
  let areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
  switch (inputUnit) {
    case "মিটার":
      outAreaM.innerHTML = `${areaOfTriangle} বর্গ ${inputUnit}`;
      outScopeM.innerHTML = `${scope} ${inputUnit}`;
      outAreaCM.innerHTML = `${sqMeterToSqCM(areaOfTriangle)} বর্গ সেন্টিমিটার`;
      outScopeCM.innerHTML = `${meterToCM(scope)} সেন্টিমিটার`;
      outAreaFt.innerHTML = `${sqMeterToSqFt(areaOfTriangle)} বর্গ ফুট`;
      outScopeFt.innerHTML = `${meterToFt(scope)} ফুট`;
      break;
    case "সেন্টিমিটার":
      outAreaM.innerHTML = `${sqCmToSqMeter(areaOfTriangle)} বর্গ মিটার`;
      outScopeM.innerHTML = `${cmToMeter(scope)} মিটার`;
      outAreaCM.innerHTML = `${areaOfTriangle} বর্গ ${inputUnit}`;
      outScopeCM.innerHTML = `${scope} ${inputUnit}`;
      outAreaFt.innerHTML = `${sqCmToSqFt(areaOfTriangle)} বর্গ ফুট`;
      outScopeFt.innerHTML = `${cmToFt(scope)} ফুট`;
      break;
    case "ফুট":
      outAreaM.innerHTML = `${sqFtToSqMeter(areaOfTriangle)} বর্গ মিটার`;
      outScopeM.innerHTML = `${ftToMeter(scope)} মিটার`;
      outAreaCM.innerHTML = `${sqFtToSqCM(areaOfTriangle)} বর্গ সেন্টিমিটার`;
      outScopeCM.innerHTML = `${ftToCm(scope)} সেন্টিমিটার`;
      outAreaFt.innerHTML = `${areaOfTriangle} বর্গ ${inputUnit}`;
      outScopeFt.innerHTML = `${scope} ফুট`;
      break;

    default:
      break;
  }
  traingelresultBox.classList.toggle("hide");
});
