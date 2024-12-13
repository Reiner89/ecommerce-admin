import TabsConfiguracion from "./TabsConfig/TabsConfiguracion";
function ConfigCuenta() {
  return (
    <div className="">
      <div className="px-[20%] bg-gradient-to-r from-cyan-500 to-blue-500 space-y-8 pt-[5%] h-[220px]">
        <h1 className="font-medium text-[25px] text-[#fff]">
          Bienvenido Usuario
        </h1>
        <TabsConfiguracion />
      </div>
      <div className="h-[700px]"></div>
    </div>
  );
}

export default ConfigCuenta;
