import DB from '../db/dbApiClient'
import apiFile from '../bin/apiFile'

const colName = 'apiInfo'

const apiTypeHandle = {
    init(data){
        let {
            type,
            name,
            text,
            id
        } = data.data
        switch (type) {
            case 'save':
                return apiFile.write({
                    text
                })
        
            default:
                break;
        }
    }
}

export default apiTypeHandle