import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const URL = 'mongodb://localhost:27017/'

const ErrorMessage = {
    open: '打开数据失败',
    search: '查询数据失败'
}

const DB = {

    /**
     * 保存页面信息
     * @param {String} param0 
     */
    save({value, dbName, colName}){
        return new Promise( (resolve,reject) => {
            MongoClient.connect(URL + dbName, (err, db) => {
                const collection = db.collection(colName)
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
        })
    },

    /**
     * 搜索页面类型
     * @param {String} param0 
     */
    search({dbName, colName}){
        return new Promise( (resolve,reject) => {
            MongoClient.connect(URL + dbName, (err, db) => {
                const collection = db.collection(colName)
                collection.find({}).toArray( (searchErr, result) => {
                    if(searchErr){
                        reject(`search ${ErrorMessage.search} ${dberr}`)
                    } else {
                        resolve(result)
                    }
                    db.close()
                })
            })
        })
    },

    /**
     * 删除页面类型
     * @param {Number} param0 
     */
    delete({id, dbName, colName}){
        return new Promise( (resolve,reject) => {
            MongoClient.connect(URL + dbName, (err, db) => {
                const collection = db.collection(colName)
                collection.remove({id}, (delErr, result) => {
                    if(delErr){
                        reject(`delete ${ErrorMessage.search} ${dberr}`)
                    } else {
                        resolve(result)
                    }
                    db.close()
                })
            })
        })
    },

    init(){
        MongoClient.connect(url, (err, db) => {
            console.log(err)
            console.log(db)
        })
    }
}

export default DB