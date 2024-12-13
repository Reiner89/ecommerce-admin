import { ChatEncabezado } from "./ChatEncabezado";
import { Sidebar } from "./Sidebar";

export const InboxPeople = () => {
  return (
    <div className="relative flex flex-col h-full overflow-y-visible overflow-x-hidden transition-all duration-300 lg:flex-[0_0_45%] lg:max-w-[45%] xl:flex-[0_0_30%] xl:max-w-[30%]">
      <ChatEncabezado />
      <Sidebar />
    </div>
  );
};
