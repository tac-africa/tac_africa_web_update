
export default function Button({ text, color, border, borderColor, textColor }: any ) {
    return (
            <button type="button" 
                className={`${textColor ? textColor : 'text-white' } ${color ? color : 'bg:text-main_blue'} ${border && 'border '} ${borderColor ? borderColor : 'border-gray-500'} font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mt-2`}>
                {text}
            </button>
    )
}