import DB from '../db/dbApiClient'
import apiFile from '../bin/apiFile'

const colName = 'apiInfo'

const apiInfoHandle = {
    init(data){
        let {
            type,
            name,
            text,
            depend,
            id
        } = data.data
        switch (type) {
            case 'save':
                return apiFile.write({
                    text
                }).then(data => {
                    return DB.apiInfoSave({
                        fileName: data.fileName,
                        name,
                        depend
                    }).then( result => {
                        return {
                            ok: 1,
                            data: result.ops[0]
                        }
                    })
                })
        
            default:
                break;
        }
    }
}

export default apiInfoHandle