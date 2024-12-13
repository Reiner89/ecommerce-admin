import { useStock } from "../../../../../../../Hooks/useStock";
import * as Styles from "../../../../../../../Styles/Actions";

export const FormBottom = () => {
  const { verComentario, formRecep, setFormRecep } = useStock();

  return (
    <>
      {verComentario && (
        <div className="form-bottom w-full">
          <div className="recepComment relative">
            <textarea
              id="recepComment"
              name="recepComment"
              rows={2}
              className={Styles.inputTextAreaS}
              placeholder=" "
              value={formRecep.recepComment}
              onChange={(e) => {
                setFormRecep((prev) => ({
                  ...prev,
                  recepComment: e.target.value,
                }));
              }}
            />
            <label htmlFor="recepComment" className={Styles.labelTextAreaS}>
              Nota
            </label>
          </div>
        </div>
      )}
    </>
  );
};
