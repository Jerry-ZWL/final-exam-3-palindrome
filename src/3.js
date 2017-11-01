function palindrome (str) {
  var regexForRemove = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(regexForRemove, '');

  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
return true;
}

console.log(palindrome('palindrome'));
//Hannah is my favourite palindrome name
console.log(palindrome('hannah'));
console.log(palindrome("Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era."));