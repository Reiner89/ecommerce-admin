import { Text, View } from "@react-pdf/renderer";

export const NroCuotas = () => {
  return (
    <View
      style={{
        width: "80%",
        fontSize: "7px",

        border: "1px solid gray",

        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, textAlign: "center" }}>
        <View
          style={{
            backgroundColor: "#2990e6",
            color: "white",
            padding: "3px",
          }}
        >
          <Text>N° DE CUOTA</Text>
        </View>
        <View style={{ padding: "3px" }}>
          <Text>Cuota001</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          textAlign: "center",
          borderRight: "1px solid gray",
          borderLeft: "1px solid gray",
        }}
      >
        <View
          style={{
            backgroundColor: "#2990e6",
            color: "white",
            padding: "3px",
          }}
        >
          <Text>IMPORTE</Text>
        </View>
        <View
          style={{
            alignContent: "center",
            padding: "3px",
          }}
        >
          <Text>S/ 899.63</Text>
        </View>
      </View>
      <View style={{ flex: 1, textAlign: "center" }}>
        <View
          style={{
            backgroundColor: "#2990e6",
            color: "white",
            padding: "3px",
          }}
        >
          <Text>FECHA DE PAGO</Text>
        </View>
        <View style={{ padding: "3px" }}>
          <Text>31-ago-2024</Text>
        </View>
      </View>
    </View>
  );
};
