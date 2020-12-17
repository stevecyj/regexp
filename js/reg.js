let con = prompt("請輸入要檢測的內容，支持正規表達式");
// console.log(con);
let reg = new RegExp(con, "g");
let el = document.querySelector("div");
console.log(el);
el.innerHTML = el.innerHTML.replace(reg, (search) => {
  return `<span style="color:red">${search}</span>`;
});
