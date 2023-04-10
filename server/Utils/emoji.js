const emojiRegex = require('emoji-regex')

module.exports = {
     encodeEmoji : (str) => {
        const regex = emojiRegex()
        return str.replace(regex, p => `emoji(${p.codePointAt(0)})`)
      },
      
       deCodeEmoji : str => {
        const emojiDecodeRegex = /emoji\(\d+\)/g
        return str.replace(emojiDecodeRegex, p => {
          const filterP = p.replace(/[^\d]/g, '')
          return String.fromCodePoint(filterP)
        })
      }
}
