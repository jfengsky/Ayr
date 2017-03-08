import fs from 'fs'
import path from 'path'

const file = {
    read(){

    },
    write({name,code}){
        return new Promise((resolve,reject) => {
            fs.writeFile(`${__dirname}../public/${name}.html`, code, 'utf-8', err => {
                if(err){
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}

export default file