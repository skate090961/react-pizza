export const IsIncludesValue = (title: string, value: string) => {
    const titleLowerCase = title.toLowerCase()
    const valueLowerCase = value.toLowerCase()
    return titleLowerCase.includes(valueLowerCase)
}