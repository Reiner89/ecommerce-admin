export const ChatSelect = () => {
  return (
    <div className="relative flex flex-col justify-center h-full overflow-y-visible overflow-x-hidden transition-all duration-300 lg:flex-[0_0_55%] lg:max-w-[55%] xl:flex-[0_0_70%] xl:max-w-[70%] border-l border-[#d1d7db] dark:border-[rgba(134,150,160,.15)] bg-[#f7f8fa] dark:bg-[#101a20]">
      <div className="alert-info">
        <hr />
        <h3 className="relative text-center font-light text-[32px] text-[#41525d] dark:text-[rgba(233,237,239,.88)]">
          Seleccione una persona
        </h3>
        <span className="relative flex items-center justify-center text-[.875rem] text-[#54656f] dark:text-[#aebac1]">
          Para comenzar una conversación
        </span>
      </div>
    </div>
  );
};
