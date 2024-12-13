import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../Styles/styles";

export const Datos = () => {
  return (
    <View style={styles.datosContainer}>
      {/* Fila Uno */}
      <View style={{ width: "50%", display: "flex", flexDirection: "row" }}>
        {/* Titulos */}
        <View style={styles.titulosContainer}>
          <Text style={styles.tituloTxt}>Cliente:</Text>
          <Text style={styles.tituloTxt}>RUC:</Text>
          <Text style={styles.tituloTxt}>Dirección:</Text>
          <Text style={styles.tituloTxt}>Ciudad:</Text>
        </View>

        {/* Datos*/}
        <View style={styles.datosCliente}>
          <Text style={{ marginBottom: "10px" }}>Juan Pérez</Text>
          <Text style={{ marginBottom: "10px" }}>20601012345</Text>
          <Text style={{ marginBottom: "10px" }}>Av. Real 456, Lima</Text>
          <Text style={{ marginBottom: "10px" }}>Lima - Lima - Los Olivos</Text>
        </View>
      </View>

      {/* Fila Dos */}
      <View style={{ width: "25%", display: "flex", flexDirection: "row" }}>
        {/* Titulos */}
        <View style={styles.titulosContainer}>
          <Text style={styles.tituloTxt}>Moneda:</Text>
          <Text style={styles.tituloTxt}>Condición de Pago:</Text>
        </View>

        {/* Datos */}
        <View style={styles.datosCliente}>
          <Text style={{ marginBottom: "10px" }}>SOLES</Text>
          <Text style={{ marginBottom: "10px" }}>Contado</Text>
        </View>
      </View>

      {/* Filta Tres */}
      <View style={{ width: "25%", display: "flex", flexDirection: "row" }}>
        {/* Titulos */}
        <View style={styles.titulosContainer}>
          <Text style={styles.tituloTxt}>IGV:</Text>
          <Text style={styles.tituloTxt}>Depósito:</Text>
        </View>

        {/* Datos */}
        <View style={styles.datosCliente}>
          <Text style={{ marginBottom: "10px" }}>18.00</Text>
          <Text style={{ marginBottom: "10px" }}>Lima</Text>
        </View>
      </View>
    </View>
  );
};
