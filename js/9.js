let st = `
  張三:0912-345678,李四:0987-654321
`;
// console.log(st.match(/\d{4}-\d{6}/g));
// console.log(st.match(/[^-\d:,]+/g));

// let ww = "wonder woman 1984";
// console.log(ww.match(/\D+/g));

console.log(st.match(/[^-\d:,\s]+/g));
