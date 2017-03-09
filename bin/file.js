import fs from 'fs'
import path from 'path'

const file = {
    read({name}){
        return new Promise((resolve, reject) => {
            fs.readFile(`./public/pages/${name}.html`, 'utf-8', (err, data) => {
                resolve(data)
            })
        })
    },
    write({name,code}){
        return new Promise((resolve,reject) => {
            fs.writeFile(`./public/pages/${name}.html`, decodeURIComponent(code), 'utf-8', err => {
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