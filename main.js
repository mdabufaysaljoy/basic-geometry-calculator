let L1 = document.querySelector(".L1");
let L2 = document.querySelector(".L2");
let L3 = document.querySelector(".L3");
let inpUnit = document.querySelector("#unit");
let outArea = document.querySelector("#area");
let outAreaUnit = document.querySelector("#areaUnit");
let outScope = document.querySelector("#scope");
let outScopeUnit = document.querySelector("#scopeUnit");
let countBtn = document.querySelector("#countBtn")
let resultBox = document.querySelector(".result");

countBtn?.addEventListener("click", function () {
    let a = Number(L1.value);
    let b = Number(L2.value);
    let c = Number(L3.value);
    let unit = inpUnit.value;
    let scope = a + b + c;
    let s = scope / 2;
    let areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    outArea.innerHTML = areaOfTriangle.toFixed(2);
    outAreaUnit.innerHTML = ` বর্গ ${unit}`;
    outScope.innerHTML = scope.toFixed(2);
    outScopeUnit.innerHTML = unit;
    resultBox?.classList.remove("hide")
})