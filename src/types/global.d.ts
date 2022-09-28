export {}

declare global {
    interface INestedStyles {
        [key: string]: {
            [key: string]: string
        }
    }
}
