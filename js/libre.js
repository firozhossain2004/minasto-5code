function libareCashout(id) {
  const cashoutInputfild = document.getElementById(id).value;
  const cashoutInputNumber = parseFloat(cashoutInputfild);
  return cashoutInputNumber;
}
function libareCashoutInnertext(id) {
  const cashoutDibFild = document.getElementById(id).innerText;
  const cashoutDibFildNumber = parseFloat(cashoutDibFild);
  return cashoutDibFildNumber;
}
function openfrom(id) {
  document.getElementById("cashin-from").classList.add("hidden");
  document.getElementById("caashout-from").classList.add("hidden");
  document.getElementById("Tranactionfrom").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
