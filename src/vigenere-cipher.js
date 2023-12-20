const ALPHABET_LENGTH = 26;

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirectMachine = true) {
    this.isDirectMachine = isDirectMachine;
  }

  getShiftedString(str, key, isShiftPositive) {
    if (str === undefined || key === undefined) {
      throw Error('Incorrect arguments!');
    }

    const isLatinLetter = (char) => /[A-Z]/i.test(char);

    const getCharAlphabetIndex = (char) => char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);

    const getShiftedChar = (char, shift) => {
      const charShiftedAlphabetIndex = (getCharAlphabetIndex(char) + shift + ALPHABET_LENGTH) % ALPHABET_LENGTH;
      const shiftedCharCode = charShiftedAlphabetIndex + 'A'.charCodeAt(0);

      return String.fromCharCode(shiftedCharCode);
    }

    const signMultiplier = isShiftPositive ? 1 : -1;

    let result = '';
    let keyCharNumber = 0;

    for (let char of str) {
      if (isLatinLetter(char)) {
        const shift = getCharAlphabetIndex(key[keyCharNumber]) * signMultiplier;

        result += getShiftedChar(char, shift);
        keyCharNumber = ++keyCharNumber % key.length;
      } else {
        result += char;
      }
    }    

    if (!this.isDirectMachine) {
      return result.split('').reverse().join('');
    }

    return result;
  }

  encrypt(message, key) {
    return this.getShiftedString(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.getShiftedString(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
