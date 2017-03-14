import React from 'react';
import Header from './Header'
import PageTypeContent from './PageTypeContent'
import ApiTypeContent from './ApiTypeContent'
import PageContent from './PageContent'

const Root = () => (
    <div>
        <Header type={'edit'} />
        <PageTypeContent />
        <ApiTypeContent />
        <PageContent />
    </div>
)

export default Root