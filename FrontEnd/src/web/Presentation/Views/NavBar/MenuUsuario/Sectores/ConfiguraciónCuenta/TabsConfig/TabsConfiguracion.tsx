import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FaRegUser, FaShoppingCart, FaHandsHelping } from "react-icons/fa";
import Usuariotab from "./ContenidoTabs/Usuario/Usuariotab";

const TabsConfiguracion = () => {
  const [selected, setSelected] = React.useState<
    string | number | null | undefined
  >("photos");

  return (
    <div className="flex w-full flex-col">
      <Tabs
        className=""
        color="default"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={(key) =>
          setSelected(key as string | number | null | undefined)
        }
      >
        <Tab
          className="h-[90px]  "
          key="photos"
          title={
            <div className="flex flex-col items-center space-x-2 w-[100px]  ">
              <FaRegUser size={30} color="skyblue" />
              <span className="text-[17px] mt-[8px] font-medium">Usuario</span>
            </div>
          }
        >
          <Card className="flex  ">
            <Usuariotab />
          </Card>
        </Tab>
        <Tab
          className="h-[90px] border-none"
          key="music"
          title={
            <div className="flex flex-col items-center space-x-2 w-[100px]">
              <FaShoppingCart size={30} color="skyblue" />
              <span className="text-[17px] mt-[8px] font-medium">Compras</span>
            </div>
          }
        >
          <Card className="flex">
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          className="h-[90px] border-none"
          key="help"
          title={
            <div className="flex flex-col items-center space-x-2 w-[100px]">
              <FaHandsHelping size={30} color="skyblue" />
              <span className="text-[17px] mt-[8px] font-medium">Ayuda</span>
            </div>
          }
        >
          <Card className="flex">
            <CardBody>vundabar</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsConfiguracion;
