export const generateInput = (handlerNames: string[]) => handlerNames.map((name, idx) => ({
    title: name,
    value: name
}))