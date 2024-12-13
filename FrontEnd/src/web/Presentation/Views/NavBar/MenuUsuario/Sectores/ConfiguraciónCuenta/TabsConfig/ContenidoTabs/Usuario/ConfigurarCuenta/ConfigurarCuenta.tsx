import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../../../../../../../../../Components/Icons/IconsE-commerce";
import { EyeFilledIcon } from "../../../../../../../../../Components/Icons/IconsE-commerce";
const ConfigurarCuenta = () => {
    const [isVisibleCurrent, setIsVisibleCurrent] = useState(false);
    const [isVisibleNew, setIsVisibleNew] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const toggleVisibilityCurrent = () => setIsVisibleCurrent(!isVisibleCurrent);
    const toggleVisibilityNew = () => setIsVisibleNew(!isVisibleNew);

    // Validar nueva contraseña
    const validatePassword = (password: string) => {
        const minLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasNoSpaces = !/\s/.test(password);
        return minLength && hasUpperCase && hasLowerCase && hasNumber && hasNoSpaces;
    };

    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewPassword(value);
        setIsButtonDisabled(!validatePassword(value));
    };

    return (
        <div className="px-5 py-5 space-y-6">
            <div className="space-y-2 mb-9">
                <h1 className="text-[30px]">Cambiar contraseña</h1>
            </div>
            <div className="space-y-10">
                {/* Campo para contraseña actual */}
                <div>
                    <Input
                        isRequired
                        labelPlacement="outside"
                        label="Contraseña actual"
                        placeholder="Ingresa tu contraseña actual"
                        variant="bordered"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        endContent={
                            <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibilityCurrent}
                                aria-label="toggle password visibility"
                            >
                                {isVisibleCurrent ? (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisibleCurrent ? "text" : "password"}
                        className="max-w-xs"
                    />
                    <p className="text-red-500 text-sm mt-1">Ingresa una contraseña</p>
                </div>

                {/* Campo para nueva contraseña */}
                <div>
                    <Input
                        isRequired
                        labelPlacement="outside"
                        label="Nueva contraseña"
                        placeholder="Ingresa tu nueva contraseña"
                        variant="bordered"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        endContent={
                            <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibilityNew}
                                aria-label="toggle password visibility"
                            >
                                {isVisibleNew ? (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisibleNew ? "text" : "password"}
                        className="max-w-xs"
                    />
                    <p className="text-red-500 text-sm mt-1">Ingresa una contraseña</p>
                </div>
            </div>

            
            <div className="mt-5 space-y-2 text-sm text-gray-500 flex space-x-5">
                <p>• Min. 8 caracteres</p>
                <p>• 1 mayúscula</p>
                <p>• 1 minúscula</p>
                <p>• 1 número</p>
                <p>• Sin espacio</p>
            </div>

          
            <Button
                disabled={isButtonDisabled}
                className={`mt-5 ${isButtonDisabled ? "opacity-50" : "opacity-100"}`}
            >
                Cambiar contraseña
            </Button>
        </div>
    );
};

export default ConfigurarCuenta;
