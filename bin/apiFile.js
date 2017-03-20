import fs from 'fs'
import path from 'path'

const apiFile = {
    read({name}){
        return new Promise((resolve, reject) => {
            fs.readFile(`./public/pages/${name}.html`, 'utf-8', (err, data) => {
                resolve(data)
            })
        })
    },
    write({text}){
        return new Promise((resolve,reject) => {
            // 根据时间戳生成文件名
            let fileName = new Date().getTime()
            fs.writeFile(`./public/apis/${fileName}.json`, decodeURIComponent(text), 'utf-8', err => {
                if(err){
                    reject(err)
                } else {
                    resolve({fileName})
                }
            })
        })
    }
}

export default apiFile