import { Text, View } from "@react-pdf/renderer";

export const Observaciones = () => {
  return (
    <View style={{ width: "65%" }}>
      <View style={{ height: "70px", rowGap: "3px" }}>
        <View>
          <Text style={{ fontSize: "9px", color: "black" }}>
            OBSERVACIONES:
          </Text>
        </View>
        <View>
          <Text>
            Abonar a la cuenta corriente del banco de credito 191-1998685-0-35
            Moneda Soles
          </Text>
        </View>
      </View>
      <View
        style={{
          borderRadius: "10px",
          border: "1px solid gray",
        }}
      >
        <View style={{ padding: "5px", rowGap: "3px" }}>
          <View>
            <Text style={{ color: "black" }}>
              Dirección detallada del origen:
            </Text>
          </View>
          <View>
            <Text>
              CAL. LOS CEDROS NRO. 143 FND. BOCANEGRA CALLAO - CALLAO - CALLAO
            </Text>
          </View>
        </View>
        <View
          style={{
            borderTop: "1px solid gray",
            borderBottom: "1px solid gray",
            padding: "5px",
            rowGap: "3px",
          }}
        >
          <View>
            <Text style={{ color: "black" }}>
              Dirección detallada del destino:
            </Text>
          </View>
          <View>
            <Text>BARRANCA BARRANCA - BARRANCA - LIMA</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottom: "1px solid gray",
            columnGap: "5px",
          }}
        >
          <View
            style={{
              borderRight: "1px solid gray",
              width: "50%",
              padding: "5px",
              rowGap: "3px",
            }}
          >
            <View>
              <Text style={{ color: "black" }}>Detalle del Viaje:</Text>
            </View>
            <View>
              <Text>LIMA, HUARAL, HUACHO, BARRANCA</Text>
            </View>
          </View>
          <View
            style={{
              width: "50%",
              padding: "5px",
              rowGap: "3px",
            }}
          >
            <View>
              <Text style={{ color: "black" }}>
                Valor Referencial del servicio de
              </Text>
            </View>
            <View>
              <Text>PEN 937.11</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            columnGap: "5px",
          }}
        >
          <View
            style={{
              borderRight: "1px solid gray",
              width: "50%",
              padding: "5px",
              rowGap: "3px",
            }}
          >
            <View>
              <Text style={{ color: "black" }}>
                Valor Referencial sobre la carga efectiva:
              </Text>
            </View>
            <View>
              <Text>PEN 937.11</Text>
            </View>
          </View>
          <View
            style={{
              width: "50%",
              padding: "5px",
              rowGap: "3px",
            }}
          >
            <View>
              <Text style={{ color: "black" }}>
                Valor Referencial sobre la carga útil
              </Text>
            </View>
            <View>
              <Text>PEN 937.11</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ padding: "10px", rowGap: "2px" }}>
        <View
          style={{
            flexDirection: "row",
            columnGap: "10px",
          }}
        >
          <View style={{ color: "black", width: "50'%" }}>
            <Text>Cta. Cte. Banco de la nacion</Text>
          </View>
          <View style={{ color: "black", width: "50'%" }}>
            <Text>00-031-027829</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", columnGap: "10px" }}>
          <View style={{ color: "black", width: "50'%" }}>
            <Text>Detraccion (4%)</Text>
          </View>
          <View style={{ color: "black", width: "50'%" }}>
            <Text>S/ 37.48</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", columnGap: "10px" }}>
          <View style={{ color: "black", width: "50'%" }}>
            <Text>Bien o Servicio</Text>
          </View>
          <View style={{ color: "black", width: "50'%" }}>
            <Text>027 - Servicio de transporte de carga</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          columnGap: "10px",
          paddingHorizontal: "10px",
        }}
      >
        <View style={{ color: "black", width: "50'%" }}>
          <Text>Neto a Pagar</Text>
        </View>
        <View style={{ color: "black", width: "50'%" }}>
          <Text>S/ 899.63</Text>
        </View>
      </View>
    </View>
  );
};
