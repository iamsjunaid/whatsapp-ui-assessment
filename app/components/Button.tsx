"use client";

interface ButtonProps {
    children: React.ReactNode;
    style?: string;
};

const Button = ({ children, style }: ButtonProps) => {
    return (
        <button className={`flex justify-around items-center gap-1 border text-xs text-gray-500 rounded-md ${style}`}>
            {children}
        </button>
    )
}

export default Button
