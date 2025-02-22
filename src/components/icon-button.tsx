import type {ComponentProps, ReactNode} from "react";

interface IconButtonProps extends ComponentProps<'button'>{
    children: ReactNode
}

export default function IconButton(props: IconButtonProps) {
    return (
        <button 
            className="px-1.5 h-12 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition duration-300"
            {...props}
        />
    )
}