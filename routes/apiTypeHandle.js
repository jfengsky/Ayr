import DB from '../db/dbApiClient'

const colName = 'apiType'

const apiTypeHandle = {
    init(data){
        let {
            type,
            name,
            kind,
            desc,
            path,
            id
        } = data.data
        switch (type) {
            case 'save':
                return DB.save({
                    name,
                    kind,
                    desc,
                    path
                }).then( data => data.result)
            case 'search':
                return DB.search({
                    id
                }).then( result => {
                    return {
                        ok: 1,
                        data: result
                    }
                })
            case 'delete':
                return DB.delete({
                    id
                }).then( result => result)
            default:
                return {
                    ok: 0
                }
        }
    }
}

export default apiTypeHandle