export {}

declare global {
    interface Color {
        [key: string]: string
    }

    interface INestedStyles {
        base?: string
        color?: {
            [key: string]: string
        }
    }
}
