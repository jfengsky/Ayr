import mongodb from 'mongodb'
const server = new mongodb.Server('localhost', 27017,{auto_reconnect: true})
// const db = new mongodb.Db('pagetype', server, {safe: true})

const DB = {
    save({value, dbName, colName}){
        const db = new mongodb.Db(dbName, server, {safe: true})
        return new Promise( (resolve,reject) => {
            db.open( (dberr, db) => {
                if(dberr){
                    reject(dberr)
                    // throw dberr
                } else {
                    db.collection(colName, (coerr, collection) => {
                        collection.insert({"cn":"详情页","en":"detail"}, (inerr, docs) => {
                            resolve(docs)
                            db.close()
                        })
                    })
                }
            })
        })
    },
    search({dbName, colName}){
        const db = new mongodb.Db(dbName, server, {safe: true})
        return new Promise( (resolve,reject) => {
            db.open( (dberr, db) => {
                if(dberr){
                    reject(dberr)
                    // throw dberr
                } else {
                    db.collection(colName, (coerr, collection) => {
                        collection.find({}).toArray( (searchErr, result) => {
                            console.log(result)
                            if(searchErr){
                                reject(dberr)
                            } else {
                                resolve(result)
                                result
                            }
                        })
                    })
                }
            })
        })
    },
    
    /**
     * 初始化数据库
     * 创建库
     */
    init(){
        return false
        // let dblist = ['pagetype', 'api']
        // // const server = new mongodb.Server('localhost', 27017,{auto_reconnect: true})
        // dblist.map(item => {
        //     const db = new mongodb.Db(item, server, {safe: true})
        //     db.open( (dberr, db) => {
        //         if(dberr){
        //             throw dberr
        //         } else {
        //             console.log(db)
        //             db.close()
        //         }
        //     })
        // })
    }
}

export default DB