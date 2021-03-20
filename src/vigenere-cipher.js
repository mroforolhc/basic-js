class VigenereCipheringMachine {
  constructor(mode) {
    this.isReverse = mode === false ? true : false;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    let encryptCount = 0;

    const arrayMessage = message.split('').map((el) => {
      if (this.alphabet.includes(el.toUpperCase())) {
        const indexEl = this.alphabet.indexOf(el.toUpperCase());
        const indexKey = this.alphabet.indexOf(key[encryptCount % key.length].toUpperCase());
        encryptCount += 1;        

        return this.alphabet[(indexEl + indexKey) % this.alphabet.length];
      }

      return el;
    })
    
    if (this.isReverse) return arrayMessage.reverse().join('');
    return arrayMessage.join('');
  }

  decrypt(encryptedMessage, key) {
    let encryptCount = 0;

    const arrayMessage = encryptedMessage.split('').map((el) => {
      if (this.alphabet.includes(el.toUpperCase())) {
        const indexEl = this.alphabet.indexOf(el.toUpperCase());
        const indexKey = this.alphabet.indexOf(key[encryptCount % key.length].toUpperCase());
        encryptCount += 1;        

        return this.alphabet[(indexEl + this.alphabet.length - indexKey) % this.alphabet.length]
      }

      return el;
    })

    if (this.isReverse) return arrayMessage.reverse().join('');
    return arrayMessage.join('');
  }
}

module.exports = VigenereCipheringMachine;
