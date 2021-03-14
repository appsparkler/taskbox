import React from 'react'
import LoadingRow from './LoadingRow'

const LoadingRows = () => (
    <div className="list-items">
        {[...new Array(6)].map((item, key) => <LoadingRow key={key} />)}
    </div>
)

export default LoadingRows;