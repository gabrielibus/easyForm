let info = {
  site: {
    title: "Indutrámites",
    description: `Cuéntanos qué debemos hacer, a dónde debemos ir o qué favor quieres que hagamos por ti.
    Necesitaremos los siguientes datos: `,
    btnText: "Solicitar servicio",
  },
  fields: {
    recogida: [
      {
        id: 1,
        label: "Nombres de quien entrega",
        placeholder: "Juan Pérez",
        type: "text",
        tag: "input",
      },
      {
        id: 2,
        label: "Teléfono 1",
        placeholder: "300-777-33-33",
        type: "tel",
        tag: "input",
      },
      {
        id: 3,
        label: "Fecha recogida",
        placeholder: "",
        type: "date",
        tag: "input",
      },
      {
        id: 4,
        label: "Primera dirección",
        placeholder: "Calle 20 #30-40, Envigado. Piso 4",
        type: "text",
        tag: "textarea",
      },
      {
        id: 5,
        label: "Notas de quien recibe",
        placeholder:
          "Reclamar encomienda y llevar CON MUCHO CUIDADO  a la segunda dirección. Después llevarla al apartamento.",
        type: "textarea",
        tag: "textarea",
      },
    ],
    entrega: [
      {
        id: 1,
        label: "Nombres de quien recibe",
        placeholder: "Juan Pérez",
        type: "text",
        tag: "input",
      },
      {
        id: 2,
        label: "Teléfono 2",
        placeholder: "300-777-33-33",
        type: "tel",
        tag: "input",
      },
      {
        id: 3,
        label: "Fecha entrega",
        placeholder: "",
        type: "date",
        tag: "input",
      },
      {
        id: 4,
        label: "Segunda dirección",
        placeholder: "Calle 20 #30-40, Envigado. Piso 4",
        type: "text",
        tag: "textarea",
      },
      {
        id: 5,
        label: "Notas adicionales",
        placeholder: "Entregar encomienda y enviarme un comprobante.",
        type: "text",
        tag: "textarea",
      },
    ],
  },
}

module.exports = info
