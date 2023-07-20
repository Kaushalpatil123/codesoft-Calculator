let string = "";
const getResult = () => {
  const inputs = document.getElementById("input1").value;
  string = string + inputs;
  const result = document.getElementById("input2");
  ans = eval(string);
  result.innerText = `${ans}`;
};
const clearresult = () => {
  location.reload();
};
