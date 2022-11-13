let items = JSON.parse(localStorage.getItem("detailsContainer")) || {};

const submitBtn = document.querySelector(".btn1");

const backBtn = document.querySelector(".backBtn");

const savedDataPage = document.querySelector(".saved_data_page");
const detailsContainer = document.querySelector(".details_container");
const mainPage = document.querySelector(".main_page");

const dateReg = document.querySelector("#dateReg");
const plantNameInpute = document.querySelector("#plantname");
const boltanicaInput = document.querySelector("#bname");
const pSeasonInpute = document.querySelector("#pseason");
const soilInpute = document.querySelector("#soil");
const toolsInpute = document.querySelector("#tools");
const fmethodInpute = document.querySelector("#fmethod");

const heading_1 = document.querySelector(".sec1");
const heading_2 = document.querySelector(".sec2");
const heading_3 = document.querySelector(".sec3");
const heading_4 = document.querySelector(".sec4");
const heading_5 = document.querySelector(".sec5");
const heading_6 = document.querySelector(".sec6");
const heading_7 = document.querySelector(".sec7");

let info = [];
let details = localStorage.getItem("detailsContainer");

function createNewData() {
  const dateRegistered = document.createElement("h4");
  const nameOfPlante = document.createElement("h4");
  const boltanicalName = document.createElement("h4");
  const plantingSeason = document.createElement("h4");
  const soilType = document.createElement("h4");
  const farmingMethod = document.createElement("h4");
  const farmingTools = document.createElement("h4");

  dateRegistered.innerHTML = dateReg.value;
  nameOfPlante.innerHTML = plantNameInpute.value;
  boltanicalName.innerHTML = boltanicaInput.value;
  plantingSeason.innerHTML = pSeasonInpute.value;
  soilType.innerHTML = soilInpute.value;
  farmingMethod.innerHTML = fmethodInpute.value;
  farmingTools.innerHTML = toolsInpute.value;

  heading_1.appendChild(dateRegistered);
  heading_2.appendChild(nameOfPlante);
  heading_3.appendChild(boltanicalName);
  heading_4.appendChild(plantingSeason);
  heading_5.appendChild(soilType);
  heading_6.appendChild(farmingTools);
  heading_7.appendChild(farmingMethod);
}

function tableCreate() {
  // let table = document.createElement("table");
  // let thead = document.createElement("thead");
  // let tbody = document.createElement("tbody");
  // let tbody = document.createElement("div");
  // table.appendChild(thead);
  // table.appendChild(tbody);
  // detailsContainer.appendChild(table);
  // info = items;
  // let row_1 = document.createElement("tr");
  // let heading_1 = document.createElement("th");
  // heading_1.innerHTML = "Date Registered";
  // let heading_2 = document.createElement("th");
  // heading_2.innerHTML = "Name Of Plant";
  // let heading_3 = document.createElement("th");
  // heading_3.innerHTML = "BOTANICAL NAME";
  // let heading_4 = document.createElement("th");
  // heading_4.innerHTML = "PLANTING SEASON";
  // let heading_5 = document.createElement("th");
  // heading_5.innerHTML = "SOIL TYPE";
  // let heading_6 = document.createElement("th");
  // heading_6.innerHTML = "FARMING TOOLS";
  // let heading_7 = document.createElement("th");
  // heading_7.innerHTML = "FARMING METHOD";
  // const d = document.createElement("li");
  // d.innerHTML = "xdhcxhjch";
  // const b = [
  //   heading_1,
  //   heading_2,
  //   heading_3,
  //   heading_4,
  //   heading_5,
  //   heading_6,
  //   heading_7,
  //   d,
  // ];
  // b.forEach((item) => {
  //   row_1.appendChild(item);
  // });
  // thead.appendChild(row_1);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  createNewData();
  tableCreate();

  savedDataPage.style.display = "flex";
  mainPage.style.display = "none";
});

backBtn.addEventListener("click", (e) => {
  savedDataPage.style.display = "none";
  mainPage.style.display = "block";
});
