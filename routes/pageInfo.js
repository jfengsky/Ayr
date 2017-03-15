import DB from '../db/dbClient'
import file from '../bin/file'

const colName = 'pageInfo'

const pageInfo = {
    init(data){
        let {
            type,
            name,
            kind,
            desc,
            code,
            id
        } = data.data
        switch (type) {
            case 'save':
                return file.write({
                    name,
                    code
                }).then( async _data => {
                    await DB.pageSave({
                        colName,
                        name,
                        kind,
                        desc
                    }).then( result => {
                        return {
                            ok: 1,
                            data: result
                        }
                    })
                })
            case 'search':
                return DB.pageSearch({
                        colName
                    }).then( result => {
                        return {
                            ok: 1,
                            data: result
                        }
                    })
            default:
                return {
                    ok: 0
                }
        }

    }
}

export default pageInfo