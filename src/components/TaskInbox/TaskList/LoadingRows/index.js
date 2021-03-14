import React from 'react'
import LoadingRow from './LoadingRow'

const LoadingRows = () => (
    <div className="list-items">
        {[...new Array(6)].map(() => <LoadingRow />)}
      </div>
)

export default LoadingRows;