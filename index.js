function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(myString) {
let len = myString.length

  if (len < 2) {
    return true
  } else if (myString[len - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, len - 1))
  } else {
    return false
  }
}

function addUpTo(arr, i) {
  if (i) {
    return arr[i] + addUpTo(arr, --i)
  } else {
    return arr[i]
  }
}


function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }

}

function includesNumber(arr, num) {
  if (arr.length === 0) {
    return false
  } else if (arr[0] === num) {
    return true
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
