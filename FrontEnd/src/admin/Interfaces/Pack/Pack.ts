import Platos1 from "../../assets/Packs/Platos1.webp";
import Platos2 from "../../assets/Packs/Platos2.webp";
import Platos3 from "../../assets/Packs/Platos3.webp";
import { Producto } from "../Productos/Productos";

export interface Pack {
  packNombre: string;
  packImages: string[];
  packSku: string;
  packPrecioImpuestos: number;
  packTipo: string;
  productosPacks: Producto[];
  packEstado: boolean;
  packDestacado: boolean;
  comentarioPack: string;
}

export const Packs: Pack[] = [
  {
    packNombre: "Pack Básico de Cocina",
    packImages: [Platos1, Platos2, Platos3],
    packSku: "PCK-001",
    packPrecioImpuestos: 100,
    packTipo: "Electrodomésticos",
    productosPacks: [
      {
        id: 1,
        imagenProducto: ["url_producto_1"],
        nombreProducto: "Tostadora",
        varianteProducto: "Rojo",
        categoriaProducto: "Cocina",
        marcaProducto: "MarcaX",
        colorProducto: "Rojo",
        descripcionProducto:
          "Tostadora de 2 ranuras, con ajuste de temperatura",
        estadoProducto: true,
        destacadoProducto: false,
        skuProducto: "TOS-001",
        unidadMedidaProducto: "Unidad",
        cantSerialesProducto: "123456789",
        precioProducto: 40,
      },
      {
        id: 2,
        imagenProducto: ["url_producto_2"],
        nombreProducto: "Horno de Microondas",
        varianteProducto: "Blanco",
        categoriaProducto: "Cocina",
        marcaProducto: "MarcaY",
        colorProducto: "Blanco",
        descripcionProducto:
          "Horno microondas de 20L, con 5 niveles de potencia",
        estadoProducto: true,
        destacadoProducto: true,
        skuProducto: "HMO-001",
        unidadMedidaProducto: "Unidad",
        cantSerialesProducto: "987654321",
        precioProducto: 60,
      },
    ],
    packEstado: true,
    packDestacado: true,
    comentarioPack:
      "Este pack incluye electrodomésticos esenciales para tu cocina.",
  },
  {
    packNombre: "Pack Fitness",
    packImages: [Platos1, Platos2, Platos3],
    packSku: "PCK-002",
    packPrecioImpuestos: 150,
    packTipo: "Deportes",
    productosPacks: [
      {
        id: 3,
        imagenProducto: ["url_producto_3"],
        nombreProducto: "Bicicleta Estática",
        varianteProducto: "Negro",
        categoriaProducto: "Deportes",
        marcaProducto: "MarcaA",
        colorProducto: "Negro",
        descripcionProducto: "Bicicleta estática con 10 niveles de resistencia",
        estadoProducto: true,
        destacadoProducto: true,
        skuProducto: "BIC-001",
        unidadMedidaProducto: "Unidad",
        cantSerialesProducto: "1234567890",
        precioProducto: 80,
      },
      {
        id: 4,
        imagenProducto: ["url_producto_4"],
        nombreProducto: "Mancuernas",
        varianteProducto: "Pesadas",
        categoriaProducto: "Deportes",
        marcaProducto: "MarcaB",
        colorProducto: "Gris",
        descripcionProducto: "Juego de mancuernas de 10kg cada una",
        estadoProducto: true,
        destacadoProducto: false,
        skuProducto: "MAN-001",
        unidadMedidaProducto: "Par",
        cantSerialesProducto: "2345678901",
        precioProducto: 70,
      },
    ],
    packEstado: true,
    packDestacado: false,
    comentarioPack: "Ideal para un entrenamiento completo en casa.",
  },
  {
    packNombre: "Pack Belleza",
    packImages: [Platos1, Platos2, Platos3],
    packSku: "PCK-003",
    packPrecioImpuestos: 200,
    packTipo: "Cosméticos",
    productosPacks: [
      {
        id: 5,
        imagenProducto: ["url_producto_5"],
        nombreProducto: "Shampoo Anti-caspa",
        varianteProducto: "500ml",
        categoriaProducto: "Belleza",
        marcaProducto: "MarcaC",
        colorProducto: "Transparente",
        descripcionProducto:
          "Shampoo con ingredientes naturales para combatir la caspa",
        estadoProducto: true,
        destacadoProducto: true,
        skuProducto: "SHA-001",
        unidadMedidaProducto: "Botella",
        cantSerialesProducto: "3456789012",
        precioProducto: 25,
      },
      {
        id: 6,
        imagenProducto: ["url_producto_6"],
        nombreProducto: "Crema Hidratante",
        varianteProducto: "250ml",
        categoriaProducto: "Belleza",
        marcaProducto: "MarcaD",
        colorProducto: "Blanco",
        descripcionProducto: "Crema hidratante para todo tipo de piel",
        estadoProducto: true,
        destacadoProducto: false,
        skuProducto: "CRE-001",
        unidadMedidaProducto: "Envase",
        cantSerialesProducto: "4567890123",
        precioProducto: 45,
      },
    ],
    packEstado: true,
    packDestacado: true,
    comentarioPack:
      "El pack perfecto para el cuidado diario de tu piel y cabello.",
  },
  {
    packNombre: "Pack Gamer",
    packImages: [Platos1, Platos2, Platos3],
    packSku: "PCK-004",
    packPrecioImpuestos: 350,
    packTipo: "Videojuegos",
    productosPacks: [
      {
        id: 7,
        imagenProducto: ["url_producto_7"],
        nombreProducto: "Consola Xbox",
        varianteProducto: "Series X",
        categoriaProducto: "Videojuegos",
        marcaProducto: "Microsoft",
        colorProducto: "Negro",
        descripcionProducto:
          "Consola de última generación con 1TB de almacenamiento",
        estadoProducto: true,
        destacadoProducto: true,
        skuProducto: "XBX-001",
        unidadMedidaProducto: "Unidad",
        cantSerialesProducto: "5678901234",
        precioProducto: 250,
      },
      {
        id: 8,
        imagenProducto: ["url_producto_8"],
        nombreProducto: "Control Xbox",
        varianteProducto: "Inalámbrico",
        categoriaProducto: "Videojuegos",
        marcaProducto: "Microsoft",
        colorProducto: "Negro",
        descripcionProducto:
          "Control inalámbrico para Xbox, con tecnología Bluetooth",
        estadoProducto: true,
        destacadoProducto: false,
        skuProducto: "CTRL-001",
        unidadMedidaProducto: "Unidad",
        cantSerialesProducto: "6789012345",
        precioProducto: 100,
      },
    ],
    packEstado: true,
    packDestacado: false,
    comentarioPack:
      "Disfruta de la mejor experiencia gamer con este pack completo.",
  },
  {
    packNombre: "Pack de Oficina",
    packImages: [Platos1, Platos2, Platos3],
    packSku: "PCK-005",
    packPrecioImpuestos: 180,
    packTipo: "Oficina",
    productosPacks: [
      {
        id: 9,
        imagenProducto: ["url_producto_9"],
        nombreProducto: "Impresora Láser",
        varianteProducto: "Blanco",
        categoriaProducto: "Oficina",
        marcaProducto: "HP",
        colorProducto: "Blanco",
        descripcionProducto: "Impresora láser monocromática de alta velocidad",
        estadoProducto: true,
        destacadoProducto: false,
        skuProducto: "IMP-001",
        unidadMedidaProducto: "Unidad",
        cantSerialesProducto: "7890123456",
        precioProducto: 120,
      },
      {
        id: 10,
        imagenProducto: ["url_producto_10"],
        nombreProducto: "Escritorio Ergonómico",
        varianteProducto: "Madera",
        categoriaProducto: "Oficina",
        marcaProducto: "MarcaE",
        colorProducto: "Madera",
        descripcionProducto:
          "Escritorio de oficina con superficie amplia y diseño ergonómico",
        estadoProducto: true,
        destacadoProducto: true,
        skuProducto: "ESC-001",
        unidadMedidaProducto: "Unidad",
        cantSerialesProducto: "8901234567",
        precioProducto: 60,
      },
    ],
    packEstado: true,
    packDestacado: true,
    comentarioPack: "Equipamiento de oficina ideal para tu espacio de trabajo.",
  },
  // Aquí puedes agregar más packs para completar los 15
];
