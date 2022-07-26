const getLongist = (string) => {
  let vowels = /[aeiou]/gi;
  let arr = string.replace(/[^a-zA-Z ]/g, '').split(' ').sort((a, b) =>  b.length - a.length);
  let longistVowel = arr[0];
  let equalityCase = [];
  let i = 1;

  if (arr[0].length > arr[1].length) return arr[0];

  while (true) {
    let longist = longistVowel.match(vowels) || '';
    let itemI = arr[i].match(vowels) || '';

    if (itemI.length > longist.length) longistVowel = arr[i];
    if (itemI.length == longist.length) equalityCase.push(arr[i], longistVowel);
    i++;

    if (arr[i].length < longistVowel.length) break;
  }

  if (equalityCase.includes(longistVowel)) {
    return console.log("Can't extract longist word because the longist words have the same number of vowels");
  } else {
    return longistVowel;
  }
}

console.log(getLongist("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"));
