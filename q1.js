let str = "a,b$c";
let strRev = str.split("").reverse().join("");

function OnlyReverseAlfabet(str, strRev) {
  let strLast = "";
  for (let i = 0, j = 0; i < str.length; ++i) {
    if (/[a-zA-Z]/.test(str[i]) === false) {
      strLast += str[i];
    } else {
      while (/[a-zA-Z]/.test(strRev[j]) === false) {
        j++;
      }
      strLast += strRev[j];
      j++;
    }
  }
  return strLast;
}
console.log(OnlyReverseAlfabet(str, strRev));
