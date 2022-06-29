
const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['62895422499726','6281211233903','6285752765133']
global.packname = 'Bot Number On'
global.author = 'Instagram @immaammm_\n\n\n\n\n'
global.sessionName = 'session'
global.prefa = ['','!','.','#','/','🐦']
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
}
global.thumb = fs.readFileSync('./src/thumb.jpg')
global.thumb2 = fs.readFileSync('./src/thumb2.jpg')
global.menu = fs.readFileSync('./src/menu.jpg')


global.dmenut = '❒═┉═┉❯'
global.dmenub = '║❖'
global.awalcmd = '*'
global.akhircmd = '*'
global.dmenub2 = '┃'
global.dmenuf = '❒═┉═┉═┉❯\n'
global.cmenut = '❏––––––『'
global.cmenuh = '』––––––'
global.cmenub = '┊々 '
global.cmenuf = '┗━═┅═━––––––๑\n'
global.pmenus = '✦'
global.htki = '––––––『'
global.htka = '』––––––'
global.sp = '⭓'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
