import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Logo from "../../../../../../../assets/Logopdf.png";

const pilares = [
  {
    id: 1,
    nombre: "Giyu Tomioka Danfer  ",
    respiracion: "Respiración del Agua",
  },
];

const styles = StyleSheet.create({
  page: {
    padding: "20px 20px",
    alignItems: "center",
    rowGap: "7px",
    fontSize: "8px",
    paddingBottom: "60px", // Espacio para el pie de página
    // color: "#5D5D5A",
    color: "#40403E",
    position: "relative",
  },
  footer: {
    position: "absolute",
    bottom: "15px", // Puedes ajustar este valor según sea necesario
    left: 0,
    right: 0,
    textAlign: "right",
    fontSize: 7,
  },
  footerpage: {
    position: "absolute",
    bottom: "15px", // Puedes ajustar este valor según sea necesario
    left: 0,
    right: 30,
    textAlign: "right",
    fontSize: 7,
  },
  table: {
    width: "100%",
    fontSize: "10px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  tableContainer: {
    width: "100%",
  },
});

export const ViewPDF = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [color] = useState("#40403E");

  useEffect(() => {
    const generateQrCode = async () => {
      const url = await QRCode.toDataURL(
        "https://drive.google.com/file/d/1wQFBjSA3Q0311LbEjkBqllwvk3hH2_QZ/view?usp=sharing"
      );

      setQrCodeUrl(url);
    };
    generateQrCode();
  }, []);

  return (
    <>
      <Document
        author="Danfer"
        title="Guia Remision Electronica"
        subject="Asunto del PDF"
        keywords="react, pdf, ejemplo"
      >
        <Page size={"A4"} style={styles.page}>
          {/* HEADER  */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignContent: "center",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <View style={{ width: "23%" }}>
              <Image src={Logo} />
            </View>
            <View
              style={{
                width: "46%",
                fontSize: "9px",
                textAlign: "left",
                lineHeight: "1.5px",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: "8px",
                }}
              >
                Byma-ve Innovation
              </Text>
              <Text>
                AV. AV. GERARDO UNGER PRIMERA UNIDAD - PRIMER PISO NRO. 6226
                URB. SANTA LUZMILA (AV. METROPOLITANA-NO 6226 LOTE 21) LIMA -
                LIMA - COMAS
              </Text>
            </View>
            <View
              style={{
                width: "31%",
                borderRadius: "10px",
                border: "1px solid gray",
                paddingVertical: "10px",
                textAlign: "center",
                display: "flex",
              }}
            >
              <View>
                <Text style={{ fontSize: "11px" }}>Ruc: 206110314644</Text>
              </View>
              <View style={{ paddingVertical: "5px" }}>
                <Text
                  style={{
                    backgroundColor: color,
                    fontWeight: "ultrabold",
                    paddingVertical: "2px",
                    fontSize: "12px",
                    color: "white",
                  }}
                >
                  GUIA DE REMISION
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: "11px", fontStyle: "italic" }}>
                  Nro. T001-00003803
                </Text>
              </View>
            </View>
          </View>
          {/* FECHAS EMISION Y TRASLADO */}
          <View
            style={{
              width: "100%",
              rowGap: "5px",
              border: "1px solid gray",
              borderRadius: "5px",
              flexDirection: "row",
            }}
            wrap={false}
          >
            <View
              style={{
                borderRight: "1px solid gray",
                width: "50%",
                alignItems: "center",
                paddingVertical: "1px",
              }}
            >
              <Text>Fecha de emisión: 31/07/2024</Text>
            </View>
            <View
              style={{
                width: "50%",
                alignItems: "center",
                paddingVertical: "1px",
              }}
            >
              <Text>Fecha de traslado: 31/07/2024</Text>
            </View>
          </View>
          {/* DESTINATARIO */}
          <View
            style={{
              width: "100%",
              rowGap: "5px",
              border: "1px solid gray",
              borderRadius: "5px",
              paddingHorizontal: "10px",
              fontSize: "7px",
              paddingVertical: "2px",
            }}
            wrap={false}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                fontSize: "8px",
                color: "black",
              }}
            >
              <Text>DESTINATARIO</Text>
            </View>
            <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
              <Text style={{ width: "8%" }}>Señor(es):</Text>
              <Text style={{ width: "90%" }}>
                ERIKA CATHERINE MAGALLANES COTOS S.A.C.
              </Text>
            </View>
            <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
              <Text style={{ width: "8%" }}>R.U.C.:</Text>
              <Text style={{ width: "90%" }}>201003078022</Text>
            </View>
            <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
              <Text style={{ width: "8%" }}>Direccion:</Text>
              <Text style={{ width: "90%" }}>
                AV. AV. GERARDO UNGER PRIMERA UNIDAD - PRIMER PISO NRO. 6226
                URB. SANTA LUZMILA (AV. METROPOLITANA-NO 6226 LOTE 21) LIMA -
                LIMA - COMAS
              </Text>
            </View>
          </View>
          {/* PUNTO DE PARTIDA Y LLEGADA */}
          <View
            style={{
              width: "100%",
              rowGap: "5px",
              border: "1px solid gray",
              borderRadius: "5px",
              flexDirection: "row",
            }}
            wrap={false}
          >
            {/* PARTIDA */}
            <View
              style={{
                borderRight: "1px solid gray",
                width: "50%",
                paddingVertical: "5px",
                paddingHorizontal: "10px",
                rowGap: "4px",
                fontSize: "7px",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  lineHeight: 1.5,

                  color: "black",
                }}
              >
                <Text>PUNTO DE PARTIDA</Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
                <Text style={{ width: "18%" }}>Direccion:</Text>
                <Text style={{ width: "82%", textTransform: "uppercase" }}>
                  Direccion: AV. AV. GERARDO UNGER PRIMERA UNIDAD - PRIMER PISO
                  NRO. 6226 URB. SANTA LUZMILA (AV. METROPOLITANA-NO 6226 LOTE
                  21) LIMA - LIMA - COMAS
                </Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
                <Text style={{ width: "18%" }}>Ubigeo:</Text>
                <Text style={{ width: "82%" }}>150141</Text>
              </View>
            </View>
            {/* LLEGADA */}
            <View
              style={{
                width: "50%",
                paddingVertical: "5px",
                paddingHorizontal: "10px",
                rowGap: "4px",
                fontSize: "7px",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  lineHeight: 1.5,

                  color: "black",
                }}
              >
                <Text>PUNTO DE LLEGADA</Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
                <Text style={{ width: "18%" }}>Direccion:</Text>
                <Text style={{ width: "82%", textTransform: "uppercase" }}>
                  Direccion: AV. AV. GERARDO UNGER PRIMERA UNIDAD - PRIMER PISO
                  NRO. 6226 URB. SANTA LUZMILA (AV. METROPOLITANA-NO 6226 LOTE
                  21) LIMA - LIMA - COMAS
                </Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
                <Text style={{ width: "18%" }}>Ubigeo:</Text>
                <Text style={{ width: "82%" }}>150141</Text>
              </View>
            </View>
          </View>
          {/* DATOS DE TRASLADO Y TRANSPORTE */}
          <View
            style={{
              width: "100%",
              rowGap: "5px",
              border: "1px solid gray",
              borderRadius: "5px",
              flexDirection: "row",
            }}
            wrap={false}
          >
            {/* TRASLADO */}
            <View
              style={{
                borderRight: "1px solid gray",
                width: "50%",
                paddingVertical: "5px",
                paddingHorizontal: "10px",
                rowGap: "4px",
                fontSize: "7px",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  lineHeight: 1.5,

                  color: "black",
                }}
              >
                <Text>DATOS DEL TRASLADO</Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
                <Text style={{ width: "28%" }}>Motivo de traslado:</Text>
                <Text style={{ width: "72%", textTransform: "uppercase" }}>
                  OTROS
                </Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.2 }}>
                <Text style={{ width: "28%" }}>Peso bruto total (KG):</Text>
                <Text style={{ width: "72%" }}>50</Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.2 }}>
                <Text style={{ width: "28%" }}>Desc. Motivo Traslado:</Text>
                <Text style={{ width: "72%", textTransform: "uppercase" }}>
                  VENTA
                </Text>
              </View>
            </View>
            {/* TRANSPORTE */}
            <View
              style={{
                width: "50%",
                paddingVertical: "5px",
                paddingHorizontal: "10px",
                rowGap: "4px",
                fontSize: "7px",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  lineHeight: 1.5,

                  color: "black",
                }}
              >
                <Text>DATOS DEL TRANSPORTE</Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.5 }}>
                <Text style={{ width: "28%" }}>Modal. del transporte:</Text>
                <Text style={{ width: "72%", textTransform: "uppercase" }}>
                  Transporte Publico
                </Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.2 }}>
                <Text style={{ width: "28%" }}>Trasportista:</Text>
                <Text style={{ width: "72%" }}>
                  CORPORACION Z1 SOCIEDAD ANONIMA CERRADA - CORPORACION Z1
                  S.A.C.
                </Text>
              </View>
              <View style={{ flexDirection: "row", lineHeight: 1.2 }}>
                <Text style={{ width: "28%" }}>R.U.C.</Text>
                <Text style={{ width: "72%", textTransform: "uppercase" }}>
                  20112294687
                </Text>
              </View>
            </View>
          </View>

          {/* TABLA DETALLE DE FACTURA */}
          <View style={styles.tableContainer}>
            <View
              style={{
                ...styles.table,
                border: "1px solid gray",
                borderRadius: "5px",
                fontSize: "7px",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: color,
                  borderBottom: "1px solid gray",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
              >
                <View
                  style={{
                    width: "10%",
                    textAlign: "center",
                    fontWeight: "ultrabold",
                    textTransform: "uppercase",
                    color: "white",
                    borderRight: "1px solid gray",
                    padding: "3px",
                  }}
                >
                  <Text>ITEM</Text>
                </View>
                <View
                  style={{
                    width: "10%",
                    textAlign: "center",
                    fontWeight: "ultrabold",
                    textTransform: "uppercase",
                    color: "white",
                    borderRight: "1px solid gray",
                    padding: "3px",
                  }}
                >
                  <Text>Cant.</Text>
                </View>
                <View
                  style={{
                    width: "10%",
                    textAlign: "center",
                    fontWeight: "ultrabold",
                    textTransform: "uppercase",
                    color: "white",
                    borderRight: "1px solid gray",
                    padding: "3px",
                  }}
                >
                  <Text>Unid.</Text>
                </View>
                <View
                  style={{
                    width: "10%",
                    textAlign: "center",
                    fontWeight: "ultrabold",
                    textTransform: "uppercase",
                    color: "white",
                    borderRight: "1px solid gray",
                    padding: "3px",
                  }}
                >
                  <Text>Codigo</Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    textAlign: "center",
                    fontWeight: "ultrabold",
                    textTransform: "uppercase",
                    color: "white",
                    padding: "3px",
                  }}
                >
                  <Text>Descripcion</Text>
                </View>
              </View>
              {pilares.map((el, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    borderBottom:
                      index === pilares.length - 1 ? "none" : "1px solid gray", // Evitar borderBottom en la última fila
                    color: "#40403E",
                    display: "flex",
                    alignContent: "center",
                  }}
                  minPresenceAhead={100} // Establece un umbral mínimo para evitar que se recorte
                  wrap={false}
                >
                  <View
                    style={{
                      width: "10%",
                      borderRight: "1px solid gray",
                      padding: "3px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>{el.id}</Text>
                  </View>
                  <View
                    style={{
                      width: "10%",
                      borderRight: "1px solid gray",
                      padding: "3px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>1</Text>
                  </View>
                  <View
                    style={{
                      width: "10%",
                      borderRight: "1px solid gray",
                      padding: "3px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>CAJ</Text>
                  </View>
                  <View
                    style={{
                      width: "10%",
                      borderRight: "1px solid gray",
                      padding: "3px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>1</Text>
                  </View>
                  <View
                    style={{
                      width: "60%",

                      padding: "3px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>Transporte terrestre de carga de Lima a ABANCAY</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          {/* docs RELACIONADOS */}
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
                <View style={{ rowGap: "10px", width: "75%" }}>
                  {/* DOCS. RELACIONADOS */}
                  <View style={{ width: "100%" }}>
                    <View
                      style={{
                        marginBottom: "4px",
                        color: "black",
                        fontSize: "8px",
                      }}
                    >
                      <Text>DOCUMENTOS RELACIONADOS:</Text>
                    </View>
                    <View
                      style={{
                        ...styles.table,
                        border: "1px solid gray",
                        borderRadius: "5px",
                        fontSize: "7px",
                      }}
                    >
                      {/* TABLE HEAD */}
                      <View
                        style={{
                          flexDirection: "row",
                          backgroundColor: color,
                          borderTopLeftRadius: "4px",
                          borderTopRightRadius: "4px",
                          borderBottom: "1px solid gray",
                        }}
                      >
                        <View
                          style={{
                            width: "50%",
                            textAlign: "center",
                            fontWeight: "ultrabold",
                            textTransform: "uppercase",
                            color: "white",
                            borderRight: "1px solid gray",
                            padding: "3px",
                          }}
                        >
                          <Text>TIPO DE DOCUMENTO</Text>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            textAlign: "center",
                            fontWeight: "ultrabold",
                            textTransform: "uppercase",
                            color: "white",
                            padding: "3px",
                          }}
                        >
                          <Text>NUMERO DE DOCUMENTO</Text>
                        </View>
                      </View>
                      {/* TABLE BODY */}
                      <View
                        style={{
                          flexDirection: "row",
                          borderBottom: "1px solid gray",
                          color: "#40403E",
                          display: "flex",
                          alignContent: "flex-start",
                        }}
                        minPresenceAhead={100} // Establece un umbral mínimo para evitar que se recorte
                        wrap={false}
                      >
                        <View
                          style={{
                            width: "50%",

                            padding: "3px",
                            alignContent: "flex-start",
                            borderRight: "1px solid gray",
                          }}
                        >
                          <Text style={{}}>GUIA DE REMISION REMITENTE</Text>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            padding: "3px",
                            alignContent: "flex-start",
                          }}
                        >
                          <Text style={{}}>T041-6797</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",

                          color: "#40403E",
                          display: "flex",
                          alignContent: "flex-start",
                        }}
                        minPresenceAhead={100} // Establece un umbral mínimo para evitar que se recorte
                        wrap={false}
                      >
                        <View
                          style={{
                            width: "50%",

                            padding: "3px",
                            alignContent: "flex-start",
                            borderRight: "1px solid gray",
                          }}
                        >
                          <Text style={{}}>GUIA DE REMISION REMITENTE</Text>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            padding: "3px",
                            alignContent: "flex-start",
                          }}
                        >
                          <Text style={{}}>T041-6797</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* DOCS. CONDUCTORES */}
                  <View style={{ width: "100%" }}>
                    <View
                      style={{
                        ...styles.table,
                        border: "1px solid gray",
                        borderRadius: "5px",
                        fontSize: "7px",
                      }}
                    >
                      {/* TABLE HEAD */}
                      <View
                        style={{
                          flexDirection: "row",
                          backgroundColor: color,
                          borderTopLeftRadius: "4px",
                          borderTopRightRadius: "4px",
                          borderBottom: "1px solid gray",
                        }}
                      >
                        <View
                          style={{
                            width: "50%",
                            textAlign: "center",
                            fontWeight: "ultrabold",
                            textTransform: "uppercase",
                            color: "white",
                            borderRight: "1px solid gray",
                            padding: "3px",
                          }}
                        >
                          <Text>DATOS DE CONDUCTOR</Text>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            textAlign: "center",
                            fontWeight: "ultrabold",
                            textTransform: "uppercase",
                            color: "white",
                            padding: "3px",
                          }}
                        >
                          <Text>DATOS DE VEHICULO</Text>
                        </View>
                      </View>
                      {/* TABLE BODY */}
                      {/* FILA */}
                      <View
                        style={{
                          flexDirection: "row",
                          borderBottom: "1px solid gray",
                          color: "#40403E",
                          display: "flex",
                          alignContent: "flex-start",
                        }}
                        minPresenceAhead={100} // Establece un umbral mínimo para evitar que se recorte
                        wrap={false}
                      >
                        <View
                          style={{
                            width: "50%",

                            padding: "3px",
                            alignContent: "flex-start",
                            borderRight: "1px solid gray",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{}}>N° Licencia: </Text>
                            <Text style={{}}>M40828090</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",

                            padding: "3px",
                            alignContent: "flex-start",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{}}>TUCE: </Text>
                            <Text style={{}}>15M23024989E</Text>
                          </View>
                        </View>
                      </View>
                      {/* FILA */}
                      <View
                        style={{
                          flexDirection: "row",
                          borderBottom: "1px solid gray",
                          color: "#40403E",
                          display: "flex",
                          alignContent: "flex-start",
                        }}
                        minPresenceAhead={100} // Establece un umbral mínimo para evitar que se recorte
                        wrap={false}
                      >
                        <View
                          style={{
                            width: "50%",

                            padding: "3px",
                            alignContent: "flex-start",
                            borderRight: "1px solid gray",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{}}>Nombres y Apellidos: </Text>
                            <Text style={{}}>
                              JULIO CESAR - MILLA CASTAÑEDA
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",

                            padding: "3px",
                            alignContent: "flex-start",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{}}>
                              N° de Autorizacion vehicular:{" "}
                            </Text>
                            <Text style={{}}> MTC</Text>
                          </View>
                        </View>
                      </View>
                      {/* FILA */}
                      <View
                        style={{
                          flexDirection: "row",

                          color: "#40403E",
                          display: "flex",
                          alignContent: "flex-start",
                        }}
                        minPresenceAhead={100} // Establece un umbral mínimo para evitar que se recorte
                        wrap={false}
                      >
                        <View
                          style={{
                            width: "50%",

                            padding: "3px",
                            alignContent: "flex-start",
                            borderRight: "1px solid gray",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{}}>N° Documento: </Text>
                            <Text style={{}}>40828090</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            padding: "3px",
                            alignContent: "flex-start",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{}}>N° Documento: </Text>
                            <Text style={{}}>40828090</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                {/* OPERACIONES  */}
                <View
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "20%", textAlign: "center" }}>
                    {qrCodeUrl && (
                      <Image
                        src={qrCodeUrl}
                        style={{ width: 60, height: 60 }}
                      />
                    )}
                  </View>
                </View>
              </View>
            </View>
            {/* NOTAS Y N° CUOTAS */}
          </View>
          {/* </Paginacion> */}
          <Text
            style={styles.footerpage}
            render={({ pageNumber, totalPages }) =>
              `Página ${pageNumber} de ${totalPages}`
            }
            fixed
          />
        </Page>
      </Document>
    </>
  );
};
