export const chargesApiTranslations = {
  relations: {
    success: {
      post: "¡El cobro fue asignado a los relacionados con éxito!",
    },
  },
  extracts: {
    not_found: "El extracto no fue encontrado",
  },
  checkout: {
    success: {
      post: "¡Espera para finalizar tu compra!",
    },
    invalid: {
      name: "El nombre ingresado no es válido",
      name_max_length_100:
        "El nombre supera el límite máximo de 100 caracteres.",
      phone: "El teléfono informado del cliente no es válido",
      phone_max_length_35:
        "El teléfono supera el límite máximo de 35 caracteres.",
      amounts: "La cantidad seleccionada no es válida",
      email: "El correo electrónico no existe o no es válido",
      email_max_length_255:
        "El correo electrónico del cliente supera el límite máximo de 255 caracteres.",
      birthdate: "La fecha de nacimiento informada no es válida",
      product: "El producto informado es inválido o no existe",
    },
  },
  operations_failures: {
    success: {
      post: "La operación financiera fue resuelta con éxito",
    },
    not_found: "La operación no fue encontrada",
    invalid: {
      operation_failed: "La operación no puede ser encontrada o resuelta",
      not_found: "La operación no fue encontrada",
    },
  },
  success: {
    post: "¡El cobro fue creado con éxito!",
    delete: "¡El cobro fue eliminado con éxito!",
    put: "¡El cobro fue actualizado con éxito!",
  },
  again_submit:
    "El formulario contiene información desactualizada. Envíalo nuevamente.",
  invalid: {
    id: "El cobro informado no existe o es inválido",
    in_ids: "Los cobros informados presentan alguna irregularidad",
    title: "El título del cobro informado es inválido o no existe",
    description: "La descripción del cobro informado no es válida",
    status: "El estado del cobro no es válido",
    payment_id: "El pago no existe o es inválido",
    expired_days: "Los días para la expiración del cobro no son válidos",
    price: "El precio del cobro no es válido",
    name: "El nombre del cobro no es válido",
    privacy: "La privacidad solo puede ser 'Pública' o 'Privada'",
    type: "El tipo de cobro no es válido",
    amount: "La cantidad del cobro no es válida",
    agency_id: "La agencia informada no existe o es inválida",
    client_id: "El cliente informado no existe o es inválido",
    started_at: "La fecha de inicio del cobro no es válida",
    not_found_bank: "El banco informado no existe o es inválido",
    not_found_client: "El cliente informado no existe o es inválido",
    not_found_agency: "La agencia informada no existe o es inválida",
    period: "El período del cobro no es válido",
    promotional_price: "El precio promocional del cobro no es válido",
    reference: "El cobro es inválido o no existe",
    clients: "Los clientes informados no existen o son inválidos",
    not_available:
      "El cobro seleccionado no existe o se encuentra indisponible",
    created_at: "La fecha de creación del cobro no es válida",
    updated_at: "La fecha de actualización del cobro no es válida",
    not_found: "El cobro no fue encontrado",
    start: "El período inicial informado no es válido",
    limit: "El límite informado no es válido",
    name_or_service:
      "El cobro requiere que se complete un nombre o se seleccione un servicio",
    recaptcha:
      "La página tiene recursos desactualizados. Recarga e intenta nuevamente.",
  },
};
