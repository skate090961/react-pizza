const sortAsc = (arr: any, key: string) => {
    return arr.sort((a: any, b: any) => (a[key] < b[key] ? -1 : 1))
}

export default sortAsc;