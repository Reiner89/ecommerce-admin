import { Text, View } from "@react-pdf/renderer";

export const Notas = () => {
  return (
    <View
      style={{
        width: "100%",
        fontSize: "7px",
        border: "1px solid gray",
        paddingHorizontal: "5px",
        paddingVertical: "3px",
        rowGap: "5px",
      }}
    >
      <Text>SON: NOVECIENTOS TREINTA Y SIETE Y 11/100 SOLES</Text>
      <Text>
        OPERACIÓN SUJETA AL SISTEMA DE PAGO DE OBLIGACIONES TRIBUTARIAS CON EL
        GOBIERNO CENTRAL
      </Text>
    </View>
  );
};
