/**
 * 新建页面表单
 */

import React, { Component, PropTypes } from 'react';

class Modalpage extends Component {
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="pageName" className="col-sm-2 control-label">文件名</label>
                    <div className="col-sm-10">
                        <div className="input-group">
                            <input type="text" className="form-control" id="pageName" placeholder="请输入文件名" />
                            <div className="input-group-addon">.html</div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <select className="form-control">
                            <option>详情页</option>
                            <option>填写页</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label for="pageDesc" className="col-sm-2 control-label">页面描述</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="pageDesc" placeholder="请输入页面描述" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <textarea className="form-control" rows="10" placeholder="请粘贴代码"></textarea>
                    </div>
                </div>
            </form>
        )
    }
}

Modalpage.propTypes = {

}

export default Modalpage