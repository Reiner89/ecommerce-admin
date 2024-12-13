import { View } from "@react-pdf/renderer";
import * as Ticket from "./Components";

export const PageDos = () => {
  return (
    <View style={{ width: "100%", rowGap: "5px" }} wrap={false}>
      <View
        style={{
          width: "100%",
          fontSize: "7px",
          rowGap: "5px",
        }}
        wrap={false}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Ticket.Observaciones />
          <Ticket.Operaciones />
        </View>
      </View>
      {/* NOTAS Y N° CUOTAS */}
      <View
        style={{
          width: "100%",
          fontSize: "7px",
          rowGap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
        wrap={false}
      >
        <Ticket.Notas />
        <Ticket.NroCuotas />
      </View>
    </View>
  );
};
