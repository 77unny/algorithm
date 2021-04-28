function solution(str, t) {
  let answer = 0;

  for (const s of str) {
    if (s === t) answer++;
  }
  return answer;
}


function solution2(str, t) {
  console.log(str.split(t));
  return str.split(t).length - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
console.log(solution2(str, 'R'));
