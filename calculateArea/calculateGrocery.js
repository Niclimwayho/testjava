let Grocery1;
let Grocery2;
let Grocery3;

function calculateGrocery() {
      Grocery1 = parseFloat(document.getElementById('Grocery1').value);
      Grocery2 = parseFloat(document.getElementById('Grocery2').value);
      Grocery3 = parseFloat(document.getElementById('Grocery3').value);

      let TotalGrocery = Grocery1 + Grocery2 + Grocery3;
}

document.getElementById('result').innerText = `The total amount is:$ ${TotalGrocery}`;