import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const URL = 'mongodb://localhost:27017/AyrData'

const colName = 'apiType'

const infoColName = 'apiInfo'

const DB = {
    /**
     * 保存api信息
     * @param {String} param0 
     */
    save({ name, kind, desc, path }) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(URL, (err, db) => {
                const collection = db.collection(colName)
                let id = 0
                // 实现自增id，查询最后一个，然后把id+1
                collection.find({}).toArray((searchErr, result) => {
                    // console.log(result)
                    if (result.length) {
                        id = result[result.length - 1].id + 1
                    }
                    collection.insert({ name, id, kind, desc, path }, (inerr, docs) => {
                        resolve(docs)
                        db.close()
                    })

                })
            })
        })
    },

    search({ id }) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(URL, (err, db) => {
                const collection = db.collection(colName)
                let where = {}
                if (id >= 0) {
                    where = { id: id - 0 }
                }
                collection.find(where).toArray((searchErr, result) => {
                    resolve(result)
                    db.close()
                })
            })
        })
    },

    delete({ id }) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(URL, (err, db) => {
                const collection = db.collection(colName)
                collection.remove({ id: id - 0 }, (delErr, result) => {
                    if (delErr) {
                        reject(`delete ${ErrorMessage.search} ${dberr}`)
                    } else {
                        resolve(result)
                    }
                    db.close()
                })
            })
        })
    },

    saveInfo({name, text}) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(URL, (err, db) => {
                const collection = db.collection(infoColName)
                let id = 0
                // 实现自增id，查询最后一个，然后把id+1
                collection.find({}).toArray((searchErr, result) => {
                    // console.log(result)
                    if (result.length) {
                        id = result[result.length - 1].id + 1
                    }
                    collection.insert({ name, id, text }, (inerr, docs) => {
                        resolve(docs)
                        db.close()
                    })

                })
            })
        })
    }
}

export default DB