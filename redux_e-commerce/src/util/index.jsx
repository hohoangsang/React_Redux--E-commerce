import { forwardRef } from "react";

export const getListFilter = (staticArray, field) => {
    let listFilter = [];
    for (let item of staticArray) {
        listFilter.push(item[field])
    }
    listFilter = [...new Set(listFilter)].sort();
    return listFilter;
}