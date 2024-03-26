import * as fs from 'fs'
let file = 'D:/assignment_of_gh/typrscipt_assignment/10_sirShahmeer/ts_assignment_10/text.txt';
fs.readFile(file, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})



