const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strArr = message.toUpperCase().split('')
    let keyArr = key.repeat(Math.ceil(message.length / key.length)).toUpperCase().split('');
    let keyArray = [];
    for (let i = 0; i < message.length; i++) {
      if (alph.includes(message.toUpperCase()[i])) {
        keyArray.push(keyArr.shift())
        strArr.shift()
      } else {
        keyArray.push(strArr.shift())
      }
    }
    let result = [];
    let indexA = 'A'.charCodeAt()
    for (let i = 0; i < message.length; i++) {
      if (alph.includes(message.toUpperCase()[i])) {
        let indexKey = keyArray[i].charCodeAt() - indexA;
        let indexStr = message.toUpperCase()[i].charCodeAt() - indexA;
        let n = indexA + (indexKey + indexStr) % 26

        result.push(String.fromCharCode(n))
      } else {
        result.push(message.toUpperCase()[i])
      }
    }
    if (this.type === true || this.type === undefined) {
      return result.join('')
    } else if (this.type === false) {
      return result.reverse().join('')
    }

  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')

    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strArr = message.toUpperCase().split('')
    let keyArr = key.repeat(Math.ceil(message.length / key.length)).toUpperCase().split('');

    let keyArray = [];
    for (let i = 0; i < message.length; i++) {
      if (alph.includes(message.toUpperCase()[i])) {
        keyArray.push(keyArr.shift())
        strArr.shift()

      } else {
        keyArray.push(strArr.shift())
      }
    }
    let result = [];
    let indexA = 'A'.charCodeAt()

    for (let i = 0; i < message.length; i++) {
      if (alph.includes(message.toUpperCase()[i])) {
        let indexKey = keyArray[i].charCodeAt() - indexA;
        let indexStr = message.toUpperCase()[i].charCodeAt() - indexA;
        let n = indexA + (indexStr - indexKey + 26) % 26

        result.push(String.fromCharCode(n))
      } else {
        result.push(message.toUpperCase()[i])
      }
    }

    if (this.type === true || this.type === undefined) {
      return result.join('')
    } else if (this.type === false) {
      return result.reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
