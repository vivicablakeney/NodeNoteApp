const chalk = require('chalk')
// const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize & minipulate yargs version
yargs.version('1.0.0')



//create add command  yargs.command allows you to define a demand 
//It takes in arguments: the first is a string that defines the name of the command, 
//and the second is an options object that describes the behavior and arguments of the command.
// describes object tel what the string does
yargs.command({
    command:'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            //by defualt demandOption is false
            demandOption: true,
            //sets to string to get string value
            type: 'string'

        }
    },
    //You can use the argv array to access and use the arguments passed to your script.
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    //     //logs title
    //     console.log('Title: ' + argv.title)
    //     //logs body
    //     console.log('body: ' + argv.body)
     }
})

//create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }

})

//create list command 
yargs.command({
    command:'list',
    describe:'List your notes',
    handler() {
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// goes through the process of parseing the arguments  with all of the configuartion deatils I provided with commans up above
yargs.parse()
// yargs supports add, remove, read, list
// when we access the args v property on yargs, yargs knows to do its thing and parse those arguments
// console.log(yargs.argv)

// const command = process.argv[0]

// console.log(process.argv)


// if (command ==='add') {
//     console.log('Adding Note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }


// const msg = getNotes()
// console.log(msg) 

// const greenMsg = chalk.green.inverse.bold('Success!')
// console.log(greenMsg)



// //ctrl c stops nodemon 
// // console.log(validator.isEmail('vivica@example.com'))
// // console.log(validator.isURL('https://mead.io'))