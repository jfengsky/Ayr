import React, { Component, PropTypes } from 'react';
import PageTypeContent from './PageTypeContent'
import ApiTypeContent from './ApiTypeContent'
class PageType extends Component {
    render() {
        return (
            <div>
                <PageTypeContent />
                <ApiTypeContent />
            </div>
        );
    }
}

PageType.propTypes = {

}

export default PageType;