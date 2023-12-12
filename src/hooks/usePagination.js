import { useState } from 'react'
import { LIMIT_DRAFT } from '../constants.js'

export function usePagination () {

  const [offset, setOffset] = useState(0)
  const [idPage, setIdPage] = useState(1) //  state from identificator page

  const nextPage = () => {
    if (offset <= 8 * LIMIT_DRAFT) {
      setOffset((offset + LIMIT_DRAFT))
      setIdPage(idPage + 1)
    }
  }

  const prevPage = () => {
    if (LIMIT_DRAFT <= offset) {
      setOffset(offset - LIMIT_DRAFT)
      setIdPage(idPage - 1)
    }
  }

  return { nextPage, prevPage, idPage, offset }
}
