export const FieldsApiTranslations = {
  success: {
    post: "¡El campo se creó con éxito!",
    delete: "¡El campo se eliminó con éxito!",
  },
  invalid: {
    name: "El nombre del campo proporcionado es inválido",
    name_max_length_100:
      "El campo contiene un nombre que supera el límite máximo de 100 caracteres.",
    component:
      "El tipo de campo proporcionado es inválido o no está disponible para esta operación.",
    type: "El tipo del formulario es inválido",
    type_max_length_50:
      "El campo contiene un type que supera el límite máximo de 50 caracteres.",
    scope: "El campo creado no puede ser asignado a este grupo",
    is_required: "El campo 'Es obligatorio' fue completado incorrectamente",
    is_sensitive: "El campo 'Es sensible' fue completado incorrectamente",
    group_id: "El grupo proporcionado es inválido o está desactivado",
    relation_id: "El cliente relacionado no existe o es inválido",
    value: "El valor del campo es inválido",
    not_found: "El campo proporcionado no existe o ha sido eliminado en este momento",
    not_found_group: "El grupo proporcionado del campo no es válido o no está registrado",
  },
  groups: {
    invalid: {
      id: "El grupo proporcionado es inválido",
      in_ids: "Uno o más grupos proporcionados son inválidos",
      name: "El nombre del grupo proporcionado es inválido",
      name_contains: "El nombre del grupo proporcionado contiene caracteres inválidos",
      scope: "El alcance del grupo proporcionado es inválido",
    },
  },
};
