const fs = require('fs')
const path = require('path')

// === PADRÃO DE COMMIT:
// [GE] <mesagem>

const commitMsgFile = process.argv[2]
const commitMessage = fs.readFileSync(commitMsgFile, 'utf8').trim()

const commitPattern = /^\[GE\] .+/;

if (!commitPattern.test(commitMessage)) {
  console.error(
    '\x1b[31m%s\x1b[0m',
    'ERROR: Mensagem de commit não segue o padrão: "[GE] <mensagem>".'
  );
  process.exit(1)
}

console.log('\x1b[32m%s\x1b[0m', 'Mensagem de commit aprovada!')
process.exit(0)
