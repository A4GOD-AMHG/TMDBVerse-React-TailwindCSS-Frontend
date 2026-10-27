import React from 'react'

const Spinner = () => {
    return (
        <div className='flex justify-center py-10' role="status">
            <div className="size-10 rounded-full border-4 border-light-100/15 border-t-accent animate-spin" aria-hidden="true" />
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner
