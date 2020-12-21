// let hd = "9";
// console.log(/^\d$/.test(hd));
document.querySelector("[name='user']").addEventListener("keyup", function () {
  let flag = this.value.match(/^[a-z]{3,6}$/);
  document.querySelector("span").innerHTML = flag ? "正確" : "失敗";
  console.log(flag ? "正確" : "失敗");
});
