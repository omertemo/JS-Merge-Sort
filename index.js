function divide (arr){
  if(arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftPart = divide(arr.slice(0, midIndex));
  const rightPart = divide(arr.slice(midIndex));

  return merge(leftPart,rightPart)
}

function merge (leftPart,rightPart) {
  let resultArr = [];
  while(leftPart.length > 0 && rightPart.length > 0) {
    resultArr.push(leftPart[0] < rightPart[0] ? leftPart.shift() : rightPart.shift());
  }
  if(leftPart.length > 0) resultArr = resultArr.concat(leftPart);
  if(rightPart.length > 0) resultArr = resultArr.concat(rightPart);
  return resultArr;
}

const arr = [6,2,4,8,5,1,3,7];
console.log( divide(arr) );
