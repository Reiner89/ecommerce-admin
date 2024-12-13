import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "550px",
  },
  page: {
    position: "relative",
    padding: "20px",
    color: "#40403E",
    rowGap: "10px",
  },
  // Header
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    gap: "15px",
  },
  direccionContainer: {
    width: "35%",
    fontSize: "9px",
    textAlign: "left",
    lineHeight: "1.5px",
  },
  logo: { width: "20%" },
  nombreEmpresa: { color: "black" },
  facturaContainer: {
    width: "45%",
    borderRadius: "10px",
    border: "1px solid gray",
    paddingVertical: "10px",
    textAlign: "center",
    display: "flex",
  },
  rucFactura: { fontSize: "12px" },
  tituloFactura: {
    backgroundColor: "#2990e6",
    fontWeight: "ultrabold",
    paddingVertical: "2px",
    fontSize: "14px",
    color: "white",
  },
  nroFactura: { fontSize: "12px", fontStyle: "italic" },

  // Datos
  datosContainer: {
    width: "100%",
    display: "flex",
    padding: "5px 10px",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid gray",
    borderRadius: "10px",
  },
  titulosContainer: {
    width: "50%",
    fontSize: "7px",
  },
  tituloTxt: { fontWeight: "ultrabold", marginBottom: "10px", color: "black" },
  datosCliente: {
    width: "50%",
    fontSize: "7px",
    textTransform: "uppercase",
  },

  // Fechas

  // Table
  tableContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "7px",
  },
  tableHeader: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#2990e6",
  },
  headerItem: {
    textAlign: "center",
    fontWeight: "ultrabold",
    textTransform: "uppercase",
    color: "white",
    borderLeft: "1px solid gray",
    borderTop: "1px solid gray",
    borderBottom: "1px solid gray",
    padding: "3px",
  },
  tableBody: {
    flexDirection: "row",
    borderLeft: "1px solid gray",
    borderBottom: "1px solid gray",
    color: "#40403E",
    display: "flex",
    alignContent: "center",
  },
  bodyItem: {
    borderRight: "1px solid gray",
    padding: "3px",
    justifyContent: "center",
    alignItems: "center",
  },
});
