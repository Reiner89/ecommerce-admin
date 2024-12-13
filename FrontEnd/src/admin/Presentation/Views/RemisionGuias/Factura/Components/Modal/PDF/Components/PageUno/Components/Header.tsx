import { Image, Text, View } from "@react-pdf/renderer";
import Logo from "../../../../../../../../../../assets/Logopdf.png";
import { styles } from "../../../Styles/styles";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logo}>
        <Image src={Logo} />
      </View>
      <View style={styles.direccionContainer}>
        <Text style={styles.nombreEmpresa}>Byma-ve Innovation</Text>
        <Text>CAL.LAS LIMAS NRO. 421 URB. NARANJAL</Text>
        <Text>LIMA - LIMA - LOS OLIVOS</Text>
      </View>
      <View style={styles.facturaContainer}>
        <View>
          <Text style={styles.rucFactura}>Ruc: 206110314644</Text>
        </View>
        <View style={{ paddingVertical: "5px" }}>
          <Text style={styles.tituloFactura}>FACTURA ELECTRONICA</Text>
        </View>
        <View>
          <Text style={styles.nroFactura}>Nro. F001-00003803</Text>
        </View>
      </View>
    </View>
  );
};
