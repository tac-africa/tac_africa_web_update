
export default function Button({ text }: any ) {
    return (
            <button type="button" 
                className={`text-white bg-main_blue font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mt-2`}>
                {text}
            </button>
    )
}