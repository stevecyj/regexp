let st = `
#1 js,200元 #
#2 php,300元 #
#9 stevetrevor,com # 史蒂夫催佛
#3 node.js,180元 #
`;

// console.log(st.match(/^\s*#\d+\s+.+\s+#$/gm));
let lessons = st.match(/^\s*#\d+\s+.+\s+#$/gm).map((v) => {
  v = v.replace(/\s*#\d+\s*/, "").replace(/\s#/, "");
  // console.log(v.split(","));
  [name, price] = v.split(",");
  return { name, price };
});

console.log(lessons);
