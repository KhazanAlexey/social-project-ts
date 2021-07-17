import React from "react";
import styles from "./paginator.module.css";
import cn from 'classnames'

type propstype = {

    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    onPageChanged: (p: number) => void
}


const Paginator: React.FC<propstype> = React.memo(function (props: propstype) {

 function createPages(pages:Array<number>, pagesCount:number, currentPage:number) {
        if(pagesCount > 10) {
            if(currentPage > 5) {
                for (let i = currentPage-4; i <= currentPage+5; i++) {
                    pages.push(i)
                    if(i == pagesCount) break
                }
            }
            else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if(i == pagesCount) break
                }
            }
        }  else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }



//pagination
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages:Array<number> = []
    createPages(pages, pageCount, props.currentPage)

    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i)
    // }
    return <div>


        <div>
            {pages.map(p => {
                return (
                    <span key={p} onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? styles.selected : styles.pagenumber}>{p}</span>
                )
            })}
        </div>
        <div>
            {pages.map(p => {
                return (
                    <span key={p} onClick={() => {
                        props.onPageChanged(p)
                    }} className={cn( {[styles.selected] : props.currentPage === p },styles.pagenumber)}>{p}</span>
                )
            })}
        </div>

    </div>
})

export default Paginator