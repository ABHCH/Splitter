// selector
"use-strict";

const billValue = document.querySelector(".bill-value");
const peopleValue = document.querySelector(".people-value");
const tipBtns = document.querySelectorAll(".btns");
const resetBtn = document.querySelector(".reset-btn");
const tipValue = document.querySelector(".tip-value");
const totalValue = document.querySelector(".balance");
const customValue = document.querySelector('.custom-value');

if(billValue.value === " " && peopleValue.value === " "){
    alert('please enter the values then proceed 🙏');
}else {
    tipBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const myBtnValue = e.currentTarget.value;
            btn.style.backgroundColor = "#55c3ad";
            calc(myBtnValue);
        })
    })
}

const calc = (btnsValues) => {
  const myBtnValue = Number(btnsValues);
  if (peopleValue.value >= 0) {
    let multiplyBillPeople = (billValue.value * myBtnValue)/100;
    const perPersonTip = multiplyBillPeople/peopleValue.value;
    tipValue.textContent = ` $ ${perPersonTip}`;
    const finalBill = (billValue.value/peopleValue.value) + Math.round(perPersonTip);
    totalValue.textContent = ` $ ${Math.round(finalBill)}`;
  } else {
    alert("please select positive Value");
  }
};

const resetApp = () => {
  totalValue.textContent = `$ 0`;
  tipValue.textContent = `$ 0`;
  peopleValue.value = ' ';
  billValue.value =  ' ';
  tipBtns.forEach((btn) => {
    btn.style.backgroundColor = "#1a484b";
  });
};

resetBtn.addEventListener("click", resetApp);
