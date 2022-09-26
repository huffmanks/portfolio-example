interface IProps {
    color: string
    text: string
}

const Button = ({ color, text }: IProps) => {
    const styles: INestedStyles = {
        base: 'w-max py-3 px-6 uppercase transition-all duration-300 hover:brightness-110',
        color: {
            primary: 'bg-orange-400 text-black',
            light: 'bg-gray-300 text-black',
        },
    }
    return (
        <>
            <button className={`${styles.base} ${styles.color?.[color]}`}>{text}</button>
        </>
    )
}

export default Button
