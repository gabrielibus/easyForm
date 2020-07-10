let info = {
  site: {
    title: "Indutrámites",
    description: `Cuéntanos qué debemos hacer, a dónde debemos ir o qué favor quieres que hagamos por ti.
    Necesitaremos los siguientes datos: `,
    btnText: "Enviar información",
  },
  fields: {
    recogida: [
      {
        label: "Nombre de la primera persona",
        placeholder: "Juan Pérez",
        type: "text",
        tag: "input",
      },
      {
        label: "Teléfono 1",
        placeholder: "300-777-33-33",
        type: "tel",
        tag: "input",
      },
      {
        label: "Fecha recogida",
        placeholder: "",
        type: "date",
        tag: "input",
      },
      {
        label: "Primera dirección",
        placeholder: "Calle 20 #30-40, Envigado. Piso 4",
        type: "text",
        tag: "textarea",
      },
      {
        label: "Notas adicionales",
        placeholder:
          "Reclamar encomienda y llevar CON MUCHO CUIDADO  a la segunda dirección. Después llevarla al apartamento.",
        type: "textarea",
        tag: "textarea",
      },
    ],
    entrega: [
      {
        label: "Nombre de la segunda persona",
        placeholder: "Juan Pérez",
        type: "text",
        tag: "input",
      },
      {
        label: "Teléfono 2",
        placeholder: "300-777-33-33",
        type: "tel",
        tag: "input",
      },
      {
        label: "Fecha entrega",
        placeholder: "",
        type: "date",
        tag: "input",
      },
      {
        label: "Segunda dirección",
        placeholder: "Calle 20 #30-40, Envigado. Piso 4",
        type: "text",
        tag: "textarea",
      },
      {
        label: "Notas adicionales",
        placeholder: "Entregar encomienda y enviarme un comprobante.",
        type: "text",
        tag: "textarea",
      },
    ],
  },
}

module.exports = info
