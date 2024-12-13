import { Text, View } from "@react-pdf/renderer";
import { pilares } from "../../../../../../../../../Data/BoletaFactura";
import { styles } from "../../../Styles/styles";

export const Table = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <View style={{ ...styles.headerItem, width: "10%" }}>
            <Text>Codigo</Text>
          </View>
          <View style={{ ...styles.headerItem, width: "10%" }}>
            <Text>Cant.</Text>
          </View>
          <View style={{ ...styles.headerItem, width: "10%" }}>
            <Text>Unid.</Text>
          </View>
          <View style={{ ...styles.headerItem, width: "40%" }}>
            <Text>Descripcion</Text>
          </View>
          <View style={{ ...styles.headerItem, width: "10%" }}>
            <Text>V.Unit.</Text>
          </View>
          <View style={{ ...styles.headerItem, width: "10%" }}>
            <Text>Dscto.</Text>
          </View>
          <View style={{ ...styles.headerItem, width: "10%" }}>
            <Text>V.Venta</Text>
          </View>
        </View>
        {pilares.map((el, index) => (
          <View
            key={index}
            style={styles.tableBody}
            minPresenceAhead={100}
            wrap={false}
          >
            <View style={{ ...styles.bodyItem, width: "10%" }}>
              <Text style={{ textAlign: "center" }}>{el.id}</Text>
            </View>
            <View style={{ ...styles.bodyItem, width: "10%" }}>
              <Text style={{ textAlign: "center" }}>{el.cantidad}</Text>
            </View>
            <View style={{ ...styles.bodyItem, width: "10%" }}>
              <Text style={{ textAlign: "center" }}>{el.unidad}</Text>
            </View>
            <View style={{ ...styles.bodyItem, width: "40%" }}>
              <Text>{el.descripcion}</Text>
            </View>
            <View style={{ ...styles.bodyItem, width: "10%" }}>
              <Text style={{ textAlign: "right" }}>{el.vUnitario}</Text>
            </View>
            <View style={{ ...styles.bodyItem, width: "10%" }}>
              <Text style={{ textAlign: "right" }}>{el.dscuento}</Text>
            </View>
            <View style={{ ...styles.bodyItem, width: "10%" }}>
              <Text style={{ textAlign: "right" }}>{el.vVenta}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
