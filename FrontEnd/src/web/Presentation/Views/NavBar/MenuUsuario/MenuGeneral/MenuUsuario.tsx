import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useAuth } from "../../../../../components/ManejoUsuario/IniciarSesión/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { grey, blue } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { useState } from "react";
export default function MenuUsuario() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
  const { logout } = useAuth();

  return (
    <Dropdown>
      <DropdownTrigger>
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
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
        <Link to="/mi-cuenta/configcuenta">Mi cuenta</Link> 
        </DropdownItem>
        <DropdownItem key="copy">
          Mis Compras
        </DropdownItem>
        <DropdownItem key="edit" className="text-danger" onClick={logout}>
        Cerrar Sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
