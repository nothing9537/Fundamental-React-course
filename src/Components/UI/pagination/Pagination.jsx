import React from 'react'
import { usePagination } from './../../../hooks/usePagination';

const Pagination = ({ posts, page, setPage, totalPages }) => {
	let pagesArray = usePagination(totalPages)
    return(
        <div className="page__wrapper">
            {posts && pagesArray.map((p) => 
                <span
                    onClick={ () => setPage(p) } 
                    key={ p } 
                    className={ page === p ? "page page__current" : "page" }
                >
                    { p }
                </span> 
            )}
        </div>
    )
}

export default Pagination