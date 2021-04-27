function solution(s){
  let result = ''
  for (const x of s) {
    (x === 'A') ? result += '#' : result += x
  }
  return result
}

const str = "BANANA";
console.log(solution(str));