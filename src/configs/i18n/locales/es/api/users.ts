export const UsersApiTranslations = {
  notifications: {
    invalid: {
      id: "La notificación no se puede encontrar con el ID proporcionado",
      in_ids: "Las notificaciones indicadas presentan alguna irregularidad",
      user_id: "El usuario indicado de la notificación es inválido",
      start: "El valor de inicio de los registros de la notificación es inválido",
      limit: "El valor límite de los registros de la notificación es inválido",
    },
  },
  groups: {
    success: {
      post: "¡El grupo se ha creado con éxito!",
      put: "¡El grupo se ha actualizado con éxito!",
      status: "¡El estado del grupo se ha modificado con éxito!",
      delete: "¡El grupo se ha eliminado con éxito!",
      patch_password: "¡Contraseña cambiada con éxito!",
      patch_status: "¡Estado cambiado con éxito!",
    },
    invalid: {
      name: "El nombre del grupo proporcionado es inválido",
      name_max_length_100:
        "El grupo contiene un nombre que excede el límite máximo de 100 caracteres.",
      name_unique: "El nombre del grupo ya está en uso",
      description: "La descripción del grupo proporcionada es inválida",
      permissions: "Los permisos proporcionados son inválidos",
      not_found: "El grupo no fue encontrado",
      not_found_permission: "Algunos de los permisos proporcionados son inválidos",
    },
  },
  success: {
    post: "¡Su registro se ha creado con éxito!",
    put: "¡El registro se ha actualizado con éxito!",
    delete: "¡El usuario se ha eliminado con éxito!",
    recover_password: "Abra el correo electrónico y siga las instrucciones",
    alter_password: "Su contraseña se ha cambiado con éxito",
    patch_status: "¡Estado cambiado con éxito!",
  },
  invalid: {
    not_permission: "No tienes permiso para realizar esta acción",
    name: "El nombre del grupo proporcionado es inválido",
    name_max_length_100:
      "El grupo contiene un nombre que excede el límite máximo de 100 caracteres.",
    name_unique: "El nombre del grupo ya está en uso",
    cpf: "El CPF está vacío o tiene un formato inválido",
    birthdate: "La fecha de nacimiento proporcionada del usuario es inválida",
    keyword: "La palabra clave del usuario está vacía o es inválida",
    password: "La contraseña tiene un formato inválido o no existe",
    operation: "El token es inválido o ha expirado",
    already_exists_cpf: "El CPF proporcionado ya está en uso",
    status: "El estado del usuario es inválido",
    not_found_invite: "El enlace de invitación accedido ha expirado o es inválido",
    incorrect_password_formatted:
      "La contraseña proporcionada es inválida o no cumple con los estándares permitidos",
    not_found_permission: "Algunos de los permisos proporcionados son inválidos",
    already_exists_phone: "El teléfono proporcionado ya está en uso",
    already_exists_email: "El correo electrónico proporcionado ya está en uso",
    email_max_length_255:
      "El correo electrónico excede el límite máximo de 255 caracteres",
    phone_max_length_35:
      "El teléfono excede el límite máximo de 35 caracteres",
    not_found: "El usuario no fue encontrado",
    not_found_token: "El token es inválido o no existe",
    created_at: "La fecha de creación del usuario es inválida",
    updated_at: "La fecha de actualización del usuario es inválida",
  },
};
