const sortDesc = (arr: any, key: string) => {
        return arr.sort((a: any, b: any) => (b[key] - a[key]));
}

export default sortDesc;