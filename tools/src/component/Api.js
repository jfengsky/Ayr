import React from 'react';
import Header from './Header'
import ApiContent from './ApiContent'

const Root = () => (
    <div>
        <Header type={'api'} />
        <ApiContent />
    </div>
)

export default Root