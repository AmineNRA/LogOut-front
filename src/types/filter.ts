export type Filter = {
    name: string,
    placeholder: string,
    options: {
        value: string | number,
        label: string
    }[],
}[]