import { useState } from "react";
import { SwitchInput } from "../../../../Components";

export const ConfigPlatform = () => {
  // Estado de los switch
  const [notifyFollowme, setNotifyFollowme] = useState(true);
  const [notifyAnswerme, setNotifyAnswerme] = useState(false);
  const [notifyMentionedme, setNotMentme] = useState(true);
  const [newProjects, setNewProjects] = useState(false);
  const [newNotice, setNewNotice] = useState(true);
  const [suscribeNewLetter, setSusNewLetter] = useState(false);

  // Followme
  const handleNotifyFollowme = () => setNotifyFollowme(!notifyFollowme);

  // Answerme
  const handleNotifyAnswerme = () => setNotifyAnswerme(!notifyAnswerme);

  // Mentionedme
  const handleNotifyMentionedme = () => setNotMentme(!notifyMentionedme);

  // NewProjects
  const handleNewProjects = () => setNewProjects(!newProjects);
  // NewNotice
  const handleNewNotice = () => setNewNotice(!newNotice);
  // SuscribeNewLetter
  const handleSuscribeNewLetter = () => setSusNewLetter(!suscribeNewLetter);

  return (
    <div className="container-config-plataforma w-full sm:w-[46%] max-w-full px-3 mb-6 sm:mb-0">
      <div className="card relative flex flex-col h-full bg-white rounded-2xl">
        <div className="relative p-4 pb-0 transition-all">
          <h6 className="relative text-base text-[#344767] font-semibold transition-all">
            Configuración de la Plataforma
          </h6>
        </div>
        <div className="relative p-4">
          <h6 className="relative text-xs text-[#67748e] leading-5 font-bold uppercase mb-2 transition-all">
            Cuenta
          </h6>
          <ul className="relative flex flex-col">
            <li className="relative block py-2">
              <div className="relative flex min-h-6 mb-0.5">
                <SwitchInput
                  checkedStatus={notifyFollowme}
                  handleChange={handleNotifyFollowme}
                />
                <label
                  htmlFor=""
                  className="relative overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-[#67748e] font-normal ml-4 w-[80%]"
                >
                  Notificarme cuando alguien me siga
                </label>
              </div>
            </li>
            <li className="relative block py-2">
              <div className="relative flex min-h-6 mb-0.5">
                <SwitchInput
                  checkedStatus={notifyAnswerme}
                  handleChange={handleNotifyAnswerme}
                />
                <label
                  htmlFor=""
                  className="relative overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-[#67748e] font-normal ml-4 w-[80%]"
                >
                  Notificarme cuando alguien responda a mi publicación
                </label>
              </div>
            </li>
            <li className="relative block py-2">
              <div className="relative flex min-h-6 mb-0.5">
                <SwitchInput
                  checkedStatus={notifyMentionedme}
                  handleChange={handleNotifyMentionedme}
                />
                <label
                  htmlFor=""
                  className="relative overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-[#67748e] font-normal ml-4 w-[80%]"
                >
                  Notificarme cuando alguien me mencione
                </label>
              </div>
            </li>
          </ul>
          <h6 className="relative text-xs text-[#67748e] leading-5 font-bold uppercase mb-2 transition-all">
            Aplicación
          </h6>
          <ul className="relative flex flex-col">
            <li className="relative block py-2">
              <div className="relative flex min-h-6 mb-0.5">
                <SwitchInput
                  checkedStatus={newProjects}
                  handleChange={handleNewProjects}
                />
                <label
                  htmlFor=""
                  className="relative overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-[#67748e] font-normal ml-4 w-[80%]"
                >
                  Nuevos lanzamientos y projectos
                </label>
              </div>
            </li>
            <li className="relative block py-2">
              <div className="relative flex min-h-6 mb-0.5">
                <SwitchInput
                  checkedStatus={newNotice}
                  handleChange={handleNewNotice}
                />
                <label
                  htmlFor=""
                  className="relative overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-[#67748e] font-normal ml-4 w-[80%]"
                >
                  Noticias y actualizaciones
                </label>
              </div>
            </li>
            <li className="relative block py-2">
              <div className="relative flex min-h-6 mb-0.5">
                <SwitchInput
                  checkedStatus={suscribeNewLetter}
                  handleChange={handleSuscribeNewLetter}
                />
                <label
                  htmlFor=""
                  className="relative overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-[#67748e] font-normal ml-4 w-[80%]"
                >
                  Suscribir al boletín
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
