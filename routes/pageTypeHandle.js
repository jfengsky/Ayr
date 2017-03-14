import DB from '../db/dbClient'

const colName = 'pageType'

const pageTypeHandle = {

    init({data}){
        let {
            type,
            name,
            id
        } = data
        switch (type) {
            case 'save':
                return DB.save({
                    name,
                    colName
                }).then( _data => {
                    return {
                        ok: 1,
                        data: _data.ops[0]
                    }
                })
            case 'search':
                return DB.search({
                    colName
                }).then(_data => {
                    return {
                        ok: 1,
                        data: _data
                    }
                })
            case 'delete':
                return DB.delete({
                    colName,
                    id: id - 0
                }).then( _data => {
                    return {
                        ok: 1,
                        data: _data
                    }
                })
            default:
                // throw Error('')
                break
        }
    }
}

export default pageTypeHandle