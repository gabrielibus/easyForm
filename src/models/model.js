let info = {
  site: {
    title: "Indutrámites",
    description: `Cuéntanos qué debemos hacer, a dónde debemos ir o qué favor quieres que hagamos por ti.
    Necesitaremos los siguientes datos: `,
    btnText: "Solicitar servicio",
  },
  fields: {
    form1: [
      {
        name: "name1",
        label: "Nombres de quien entrega",
        placeholder: "Juan Pérez",
        type: "text",
        tag: "input",
      },
      {
        name: "phone1",
        label: "Teléfono 1",
        placeholder: "300-777-33-33",
        type: "tel",
        tag: "input",
      },
      {
        name: "date1",
        label: "Fecha recogida",
        placeholder: "dd/mm/aaaa",
        type: "date",
        tag: "input",
      },
      {
        name: "address1",
        label: "Primera dirección",
        placeholder: "Calle 20 #30-40, Envigado. Piso 4",
        type: "text",
        tag: "textarea",
      },
      {
        name: "notes1",
        label: "Notas de quien recibe",
        placeholder:
          "Reclamar encomienda y llevar CON MUCHO CUIDADO  a la segunda dirección. Después llevarla al apartamento.",
        type: "textarea",
        tag: "textarea",
      },
    ],
    form2: [
      {
        name: "name2",
        label: "Nombres de quien recibe",
        placeholder: "Juan Pérez",
        type: "text",
        tag: "input",
      },
      {
        name: "phone2",
        label: "Teléfono 2",
        placeholder: "300-777-33-33",
        type: "tel",
        tag: "input",
      },
      {
        name: "date2",
        label: "Fecha entrega",
        placeholder: "",
        type: "date",
        tag: "input",
      },
      {
        name: "address2",
        label: "Segunda dirección",
        placeholder: "Calle 20 #30-40, Envigado. Piso 4",
        type: "text",
        tag: "textarea",
      },
      {
        name: "notes2",
        label: "Notas adicionales",
        placeholder: "Entregar encomienda y enviarme un comprobante.",
        type: "text",
        tag: "textarea",
      },
    ],
  },
}

module.exports = info
