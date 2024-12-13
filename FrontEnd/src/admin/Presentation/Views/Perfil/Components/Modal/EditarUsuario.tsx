export const EditarUsuario = ({ open, onClose }: Props) => {
  console.log(open, onClose);
  return <div>EditarUsuario</div>;
};

interface Props {
  open: boolean;
  onClose: () => void;
}
