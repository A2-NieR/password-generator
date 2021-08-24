import { ref } from 'vue';

const generatePassword = (
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecial,
) => {
  let finalPassword = ref('');

  const generateCharacterArrays = (min, max) => {
    const array = [];
    for (let i = min; i <= max; i += 1) {
      array.push(i);
    }
    return array;
  };

  const UPPERCASE_CODES = generateCharacterArrays(65, 90);
  const LOWERCASE_CODES = generateCharacterArrays(97, 122);
  const NUMBER_CODES = generateCharacterArrays(48, 57);
  const SYMBOL_CODES = generateCharacterArrays(33, 47)
    .concat(generateCharacterArrays(58, 64))
    .concat(generateCharacterArrays(91, 96))
    .concat(generateCharacterArrays(123, 126));

  let selectedCharacters = [];

  if (includeLowercase) selectedCharacters = selectedCharacters.concat(LOWERCASE_CODES);
  if (includeUppercase) selectedCharacters = selectedCharacters.concat(UPPERCASE_CODES);
  if (includeNumbers) selectedCharacters = selectedCharacters.concat(NUMBER_CODES);
  if (includeSpecial) selectedCharacters = selectedCharacters.concat(SYMBOL_CODES);

  const passwordCharacters = [];

  if (passwordLength > 0) {
    for (let i = 0; i < passwordLength; i += 1) {
      const characterCode = selectedCharacters[Math.floor(Math.random()
        * selectedCharacters.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    finalPassword = passwordCharacters.join('');
  } else {
    finalPassword = ('');
  }

  return { finalPassword };
};

export default generatePassword;
