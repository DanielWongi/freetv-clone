import { on } from 'events';
import React from 'react';

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
    return (
        <div className="relative mt-5">
            <input
                dir='ltr'
                onChange={onChange}
                type={type}
                value={value}
                id={id}
                className="
                    block
                    rounded-lg
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    font-ploni-regular
                    text-black
                    text-lg
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                    invalid:border-b-1
                    text-left
                "
                placeholder=""
            />
            <label
            className="
                absolute
                text-md
                text-zinc-400
                duration-150
                transform
                -translate-y-3
                scale-75
                top-4
                z-10
                origin-[0]
                right-6
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3
                font-ploni-d-bold
            "
            htmlFor="email">
                {label}
            </label>
        </div>
    )
}

export default Input;