
const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['62895422499726','6281211233903','6285752765133']
global.packname = '๏ช๐ต๐๐ก ๐๐-๐ฉ๐๐๐๐'
global.author = 'Instagram @immaammm_\n\n\n\n\n'
global.sessionName = 'session'
global.prefa = ['','!','.','#','/','๐ฆ']
global.mess = {
    success: 'โ Success',
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


global.dmenut = 'โโโโโโฏ'
global.dmenub = 'โโ'
global.awalcmd = '*'
global.akhircmd = '*'
global.dmenub2 = 'โ'
global.dmenuf = 'โโโโโโโโฏ\n'
global.cmenut = 'โโโโโโโใ'
global.cmenuh = 'ใโโโโโโ'
global.cmenub = 'โใ '
global.cmenuf = 'โโโโโโโโโโโโเน\n'
global.pmenus = 'โฆ'
global.htki = 'โโโโโโใ'
global.htka = 'ใโโโโโโ'
global.sp = 'โญ'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
