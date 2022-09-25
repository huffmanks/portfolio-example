interface IProps {
    color: string
    text: string
}

const Button = ({ color, text }: IProps) => {
    const styles: INestedStyles = {
        base: 'py-3 px-6 uppercase',
        color: {
            primary: 'bg-orange-400 text-black',
        },
    }
    return (
        <>
            <button className={`${styles.base} ${styles.color?.[color]}`}>{text}</button>
        </>
    )
}

export default Button
