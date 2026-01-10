export const ToursApiTranslations = {
  success: {
    imports: "Los tours se han importado con éxito",
    post: "¡El tour se ha creado con éxito!",
    put: "¡El tour se ha actualizado con éxito!",
    delete: "¡El tour se ha eliminado con éxito!",
    patch: "¡La categoría del/de los tour(s) se ha actualizado con éxito!",
  },
  agencies: {
    success: {
      post: "¡La agencia se ha añadido al tour con éxito!",
    },
  },
  periods: {
    success: {
      post: "¡El período del tour se ha actualizado con éxito!",
    },
    invalid: {
      model: "El modelo proporcionado del período del tour es inválido",
      frequency: "La frecuencia proporcionada es inválida.",
    },
  },
  galleries: {
    success: {
      post: "¡La galería del tour se ha actualizado con éxito!",
      delete: "¡La imagen de la galería del tour se ha eliminado con éxito!",
    },
    invalid: {
      image_id: "La imagen proporcionada de la galería del tour es inválida",
    },
  },
  address: {
    success: {
      post: "¡La dirección del tour se ha actualizado con éxito!",
    },
    invalid: {
      country: "El país proporcionado de la dirección del tour es inválido",
      state: "El estado proporcionado de la dirección del tour es inválido",
      city: "La ciudad proporcionada de la dirección del tour es inválida",
      zip_code: "El código postal proporcionado de la dirección del tour es inválido",
      street: "La calle proporcionada de la dirección del tour es inválida",
      number: "El número proporcionado de la dirección del tour es inválido",
      complement:
        "El complemento proporcionado de la dirección del tour es inválido",
      complement_contains:
        "El complemento proporcionado de la dirección del tour es inválido",
      type: "El tipo proporcionado de la dirección del tour es inválido",
      start:
        "El valor de inicio de los registros de la dirección del tour es inválido",
      limit:
        "El valor límite de los registros de la dirección del tour es inválido",
    },
  },
  rules: {
    success: {
      post: "¡La regla del tour se ha actualizado con éxito!",
    },
    invalid: {
      type: "El tipo proporcionado de la regla del tour es inválido",
      action: "La acción proporcionada de la regla del tour es inválida",
      expression: "La expresión proporcionada de la regla del tour es inválida",
      applies_at: "El campo de aplicación de la regla del tour es inválido",
      price: "El precio proporcionado de la regla del tour es inválido",
      amount: "La cantidad proporcionada de la regla del tour es inválida",
      start: "El valor de inicio de los registros de la regla del tour es inválido",
      limit: "El valor límite de los registros de la regla del tour es inválido",
    },
  },
  invalid: {
    id: "El tour no se puede encontrar con el ID proporcionado",
    data: "El sistema encontró un problema. Intente nuevamente más tarde",
    path: "El sistema encontró un problema. Intente nuevamente más tarde",
    in_ids: "Los tours indicados presentan alguna irregularidad",
    client: "El tour indicado es inexistente o inválido",
    short_description: "El tour indicado es inexistente o inválido",
    clients: "Los tours indicados son inexistentes o inválidos",
    agency_id: "La agencia proporcionada del tour es inexistente o inválida",
    name: "El nombre proporcionado del tour es inválido",
    name_max_length_100:
      "El tour contiene un nombre que excede el límite máximo de 100 caracteres.",
    loogotype: "El avatar del tour contiene una URL inválida",
    title_contains: "El título del tour contiene palabras inválidas",
    video: "El video del tour contiene una URL inválida",
    slots: "El número de cupos del tour es inválido",
    currency: "La moneda proporcionada del tour es inválida",
    unavailable_at: "El campo de indisponibilidad del tour es inválido",
    available_at: "El campo de disponibilidad del tour es inválido",
    featured: "El campo de destacado del tour es inválido",
    status: "El estado proporcionado del tour es inválido",
    price: "El precio proporcionado del tour es inválido",
    created_at: "La fecha de creación proporcionada del tour es inválida",
    updated_at: "La fecha de actualización proporcionada del tour es inválida",
    phone: "El teléfono proporcionado del tour está en uso o es inválido",
    phone_max_length_35:
      "El tour contiene un teléfono que excede el límite máximo de 35 caracteres.",
    cnpj: "El CNPJ proporcionado del tour es inválido",
    describe: "La descripción proporcionada del tour es inválida",
    website: "El sitio web proporcionado del tour es inválido",
    email: "El correo electrónico proporcionado del tour es inválido",
    email_max_length_255:
      "El tour contiene un correo electrónico que excede el límite máximo de 255 caracteres.",
    start: "El valor de inicio de los registros del tour es inválido",
    limit: "El valor límite de los registros del tour es inválido",
    not_found_category: "La categoría oculta es inválida o no está disponible",
  },
};
