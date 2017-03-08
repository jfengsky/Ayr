import mongodb from 'mongodb'
const server = new mongodb.Server('localhost', 27017,{auto_reconnect: true})
// const db = new mongodb.Db('pagetype', server, {safe: true})
const ErrorMessage = {
    open: '打开数据失败',
    search: '查询数据失败'
}

const DB = {
    save({value, dbName, colName}){
        const db = new mongodb.Db(dbName, server, {safe: true})
        return new Promise( (resolve,reject) => {
            db.open( (dberr, db) => {
                if(dberr){
                    reject(`save ${ErrorMessage.open} ${dberr}`)
                    // throw dberr
                } else {
                    db.collection(colName, (coerr, collection) => {
                        
                        let id = 0
                        // 实现自增id，查询最后一个，然后把id+1
                        collection.find({}).toArray( (searchErr, result) => {
                            // console.log(result)
                            if(result.length){
                                id = result[result.length -1].id + 1
                            }

                            collection.insert({name:value,id:id}, (inerr, docs) => {
                                resolve(docs)
                                db.close()
                            })

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
                    reject(`search ${ErrorMessage.open} ${dberr}`)
                    // throw dberr
                } else {
                    db.collection(colName, (coerr, collection) => {
                        collection.find({}).toArray( (searchErr, result) => {
                            if(searchErr){
                                reject(`search ${ErrorMessage.search} ${dberr}`)
                            } else {
                                resolve(result)
                            }
                            db.close()
                        })
                    })
                }
            })
        })
    },
    delete({id, dbName, colName}){
        const db = new mongodb.Db(dbName, server, {safe: true})
        return new Promise( (resolve,reject) => {
            db.open( (dberr, db) => {
                if(dberr){
                    reject(`delete ${ErrorMessage.open} ${dberr}`)
                    // throw dberr
                } else {
                    db.collection(colName, (coerr, collection) => {
                        collection.remove({id}, (delErr, result) => {
                            if(delErr){
                                reject(`delete ${ErrorMessage.search} ${dberr}`)
                            } else {
                                resolve(result)
                            }
                            db.close()
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
    }
}

export default DB