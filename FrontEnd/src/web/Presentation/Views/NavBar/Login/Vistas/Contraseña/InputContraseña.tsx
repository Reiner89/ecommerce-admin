import React from "react";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../../../../../Components/Icons/IconsE-commerce";
import { EyeFilledIcon } from "../../../../../Components/Icons/IconsE-commerce";


interface InputContraseñaProps {
    label?: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputContraseña({
    label = "Contraseña",
    placeholder = "Ingresa tu contraseña",
    required = false,
    value,
    onChange,
}: InputContraseñaProps) {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            label={label}
            variant="bordered"
            placeholder={placeholder}
            required={required}
            value={value} 
            onChange={onChange} 
            endContent={
                <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                >
                    {isVisible ? (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
        />
    );
}
