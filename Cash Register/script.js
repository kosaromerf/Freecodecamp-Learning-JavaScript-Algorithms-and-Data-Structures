let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const money = document.getElementById("cash");
const button = document.getElementById("purchase-btn");
const register = document.getElementById("changes-detail");
const message = document.getElementById("change-due");

function inRegister(cid) {
  cid.forEach((e) => {
    register.innerHTML += `<div class="line"><p class="register" >${
      e[0][0] + e[0].slice(1).toLowerCase()
    }</p><p class="register">${e[1]}</p></div>`;
  });

  register.innerHTML += `<div class="line"><p class="register" >TOTAL</p><p class="register">${cid
    .reduce((tot, e) => e[1] + tot, 0)
    .toFixed(2)}</p></div>`;
}

inRegister(cid);

function checkCashRegister(price, cash, cid) {
  if (price > cash) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (price == cash) {
    message.innerText = "No change due - customer paid with exact cash";
    return;
  }

  let cashBack = cash - price;
  let changeBack = [];
  let arr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  for (let i = 8; i >= 0; i--) {
    if (cashBack >= cid[i][1] && cid[i][1] != 0) {
      cashBack -= cid[i][1];
      changeBack.push(cid[i]);
    } else if (cid[i][1] != 0 && cashBack >= arr[i]) {
      changeBack.push([cid[i][0], Math.floor(cashBack / arr[i]) * arr[i]]);
      cashBack = Math.round((cashBack % arr[i]) * 100) / 100;
    }
  }
  let totalCash = cid.reduce((total, e) => total + e[1], 0);

  if (cashBack != 0) {
    message.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  } else if (totalCash == cash - price) {
    let msg = changeBack.map((e) => `${e[0]}: $${e[1]}`).join(" ");
    message.innerText = `Status: CLOSED ${msg}`;
    return;
  } else {
    let msg = changeBack.map((e) => `${e[0]}: $${e[1]}`).join(" ");
    message.innerText = `Status: OPEN ${msg}`;
    return;
  }
}

button.addEventListener("click", () =>
  checkCashRegister(price, money.value, cid)
);
