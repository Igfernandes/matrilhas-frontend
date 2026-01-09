export const FieldsApiTranslations = {
  success: {
    post: "O campo foi criado com sucesso!",
    delete: "O campo foi excluído com sucesso!",
  },
  invalid: {
    name: "O nome do campo informado está inválido",
    name_max_length_100:
      "O campo contém nome com o limite acima do máximo de 100 caracteres.",
    component:
      "O tipo de campo informado encontra-se inválido ou indisponível para essa operação.",
    type: "O tipo do formulário está inválido",
    type_max_length_50:
      "O campo contém type com o limite acima do máximo de 50 caracteres.",
    scope: "O campo criado não pode ser atribuído a esse grupo",
    is_required: "O campo de 'É obrigatório', foi preenchido incorretamente",
    is_sensitive: "O campo de 'É sensível', foi preenchido incorretamente",
    group_id: "O grupo informado encontra-se inválido ou desativado",
    relation_id: "O cliente relacionado não existe ou está inválido",
    value: "O valor do campo é inválido",
    not_found: "O campo informado não existe ou foi nesse momento excluído",
    not_found_group: "O grupo informado do campo não é válido ou registrado",
  },
  groups: {
    invalid: {
        id: "O grupo informado é inválido",
        in_ids: "Um ou mais grupos informados são inválidos",
        name: "O nome do grupo informado é inválido",
        name_contains: "O nome do grupo informado contém caracteres inválidos",
        scope: "O escopo do grupo informado é inválido",
    }
  }
};
