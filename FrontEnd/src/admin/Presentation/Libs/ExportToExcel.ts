// Function reusable to export data in excel format
import ExcelJS from "exceljs";
import { toast } from "sonner";

export const exportToExcel = async <T>(
  data: T[],
  columns: Partial<ExcelJS.Column>[],
  fileName: string
) => {
  try {
    // Verify that the data is not empty
    if (data.length === 0) {
      toast.error("No hay datos para exportar");
      return;
    }

    // Crear un nuevo libro de trabajo
    const workbook = new ExcelJS.Workbook();
    // Crear una hoja de trabajo
    const worksheet = workbook.addWorksheet("Datos");

    // Definir las columnas
    worksheet.columns = columns;

    // Estilos de los encabezados
    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      (cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: "0066CC",
        },
      }),
        (cell.font = {
          bold: true,
          color: {
            argb: "FFFFFF",
          },
        });
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
      };
      cell.alignment = {
        horizontal: "center",
      };
    });

    // Agregar los datos
    data.forEach((row) => {
      worksheet.addRow(row);
    });

    // Generar el archivo de Excel
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    // Descargar el archivo de Excel
    link.href = url;
    link.download = `${fileName}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("Los datos se han exportado correctamente");
  } catch (error) {
    toast.error("Error al exportar los datos");
  }
};
