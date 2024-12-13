import { Text, View } from "@react-pdf/renderer";

export const Fechas = () => {
  return (
    <View
      style={{
        width: "100%",
        borderRadius: "10px",
        border: "1px solid gray",
        textAlign: "left",
        lineHeight: "1.5",
        fontSize: "7px",
        rowGap: "5px",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          textAlign: "center",
          borderRight: "1px solid gray",
          padding: "10px",
        }}
      >
        <View>
          <Text
            style={{
              color: "black",
            }}
          >
            Fecha de Emisión:
          </Text>
        </View>
        <View>
          <Text style={{}}>27-ago-2024</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          textAlign: "center",
          borderRight: "1px solid gray",
          padding: "10px",
        }}
      >
        <View>
          <Text
            style={{
              color: "black",
            }}
          >
            Forma de Pago:
          </Text>
        </View>
        <View>
          <Text style={{}}>Credito</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          textAlign: "center",
          borderRight: "1px solid gray",
          padding: "10px",
        }}
      >
        <View>
          <Text
            style={{
              color: "black",
            }}
          >
            Orden de Compra:
          </Text>
        </View>
        <View>
          <Text style={{}}></Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          textAlign: "center",
          borderRight: "1px solid gray",
          padding: "10px",
        }}
      >
        <View>
          <Text
            style={{
              color: "black",
            }}
          >
            Fecha de Vencimiento:
          </Text>
        </View>
        <View>
          <Text style={{}}>31-ago-2024</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          textAlign: "center",

          padding: "10px",
        }}
      >
        <View>
          <Text
            style={{
              color: "black",
            }}
          >
            FN° Guía de Remisión:
          </Text>
        </View>
        <View>
          <Text style={{}}></Text>
        </View>
      </View>
    </View>
  );
};
