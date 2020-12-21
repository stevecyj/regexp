// let ww = "wonder1984_";
// console.log(ww.match(/\w+/));

// let email = "abc123@ef.com";
// reg = /^\w+@\w+\.\w+$/;
// found = email.match(reg);
// console.log(found);

// console.log("abc123@ef.com".match(/\W/));

// 帳號規則
/[a-z]\w{4,9}/i;

let username = prompt("請輸入使用者名稱");
console.log(/^[a-z]\w{4,9}$/i.test(username));
