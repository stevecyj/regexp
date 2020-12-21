// \d 數字， \w 數字、字母、下底線， . 除了換行符號外都包了
// let hd = "houdunren-_!@#$%^&*()";
// console.log(hd.match(/.+/));

// let url = "https://www.houdunren.com";
// console.log(url.match(/https?:\/\/\w+\.\w+\.\w+/));

// let hd = `
// houdunren.com
// hdcms.com
// `;
// console.log(hd.match(/.+/s)[0]);

// 空格
let tel = "0912 - 345678";
console.log(tel.match(/\d+\s-\s\d{6}/));
