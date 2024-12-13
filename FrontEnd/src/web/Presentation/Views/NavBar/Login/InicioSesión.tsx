import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { grey, blue } from '@mui/material/colors';
import CountrySelect from './Vistas/SelectorPais/SelectPais';
import { Input } from '@nextui-org/input';
import InputContraseña from './Vistas/Contraseña/InputContraseña';
import { Checkbox } from "@nextui-org/react";
import { useAuth } from '../../../../components/ManejoUsuario/IniciarSesión/AuthContext';

type SectionType = 'login' | 'register' | 'recover';

function InicioSesion() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState<SectionType>('login');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleTabChange = (section: SectionType) => {
        setCurrentSection(section);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    
   
    
        if (email.trim() === "usuario@example.com" && password.trim() === "123456") {
            
            login();
            setIsOpen(false);
        } else {
            console.log("Credenciales incorrectas");
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
                onClick={toggleDropdown}
                style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                <AccountCircleIcon
                    sx={{
                        color: grey[500],
                        fontSize: 50,
                        transition: 'color 0.4s ease',
                        '&:hover': {
                            color: blue[500],
                        },
                    }}
                />
            </button>
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '60px',
                        right: '-110px',
                        width: currentSection === 'login' ? '300px' : '350px',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        textAlign: 'center',
                        zIndex: 1000,
                        animation: 'slideDown 0.5s ease forwards'
                    }}
                >
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                        {currentSection === 'login' ? 'Inicia Sesión' : currentSection === 'register' ? 'Crea tu Cuenta' : 'Recupera tu Contraseña'}
                    </h2>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {currentSection === 'login' && (
                            <>
                            
                                <Input
                                    type="email"
                                    required
                                    label="Correo"
                                    placeholder="Ingresa tu Correo"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputContraseña
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    required
                                />
                            </>
                        )}

                        {currentSection === 'register' && (
                            <>
                                <Input type="email" required label="Correo" placeholder="Ingresa tu Correo" />
                                <Input type="text" label="Nombre de Usuario" variant="bordered" />
                                <Input type="text" label="Nombres" variant="bordered" />
                                <Input type="text" label="Apellidos" variant="bordered" />
                                <CountrySelect />
                                
                            </>
                        )}

                        <button
                            type="submit"
                            style={{
                                padding: '10px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: '#fff',
                                backgroundColor: '#0070f3',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginTop: '10px'
                            }}
                        >
                            {currentSection === 'login' ? 'Inicia Sesión' : currentSection === 'register' ? 'Regístrate' : 'Enviar'}
                        </button>
                    </form>

                    <div style={{ marginTop: '10px', fontSize: '14px', color: '#0070f3' }}>
                        {currentSection === 'login' && (
                            <div>
                                <p className='text-[#000]'>
                                    ¿Nuevo Usuario? <a href="#" onClick={() => handleTabChange('register')} className='text-[#0070f3]'>Crea tu nueva cuenta</a>
                                </p>
                                <p>
                                    <a href="#" onClick={() => handleTabChange('recover')} className='text-[#0070f3]'>Recupera tu contraseña</a>
                                </p>
                            </div>
                        )}
                        {currentSection === 'register' && (
                            <div>
                                <Checkbox defaultSelected>
                                    <p className='text-[12px]'>Quiero estar al tanto de las últimas novedades sobre los productos.</p>
                                </Checkbox>
                                <p className='text-[#000]'>
                                    ¿Ya tienes cuenta? <a href="#" onClick={() => handleTabChange('login')} className='text-[#0070f3]'>Inicia sesión</a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default InicioSesion;
