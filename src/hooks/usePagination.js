import { useMemo, useState } from 'react';

export const usePagination = (totalPages) => {
    const [foo, setFoo] = useState([])
    useMemo( () => {
        let pagesArray = []
        for (let i = 1; i <= totalPages; i++) {
            pagesArray.push(i);
        }
        setFoo(pagesArray)
    }, [totalPages])
    return foo
}