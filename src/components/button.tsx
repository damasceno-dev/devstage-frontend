import {ComponentProps, ReactNode} from "react";

interface ButtonProps extends ComponentProps<'button'>{
    children: ReactNode
}

export default function Button(props: ButtonProps) {
    return (
        <button
            {...props}
            className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition duration-300"
        />
        
    )
}