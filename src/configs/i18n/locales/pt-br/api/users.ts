export const UsersApiTranslations = {
  notifications: {
    invalid: {
      id: "A notificação não pode ser encontrada com o ID informado",
      in_ids: "As notificações informadas encontram-se com alguma irregularidade",
      user_id: "O usuário informado da notificação encontra-se inválido",
      start: "O valor de início dos registros da notificação está inválido",
      limit: "O valor de limite dos registros da notificação está inválido",
    }
  },
  groups: {
    success: {
      post: "O grupo foi criado com sucesso!",
      put: "O grupo foi atualizado com sucesso!",
      status: "O status da grupo foi alterado com sucesso!",
      delete: "O grupo foi excluído com sucesso!",
      patch_password: "Senha alterada com sucesso!",
      patch_status: "Status alterado com sucesso!",
    },
    invalid: {
      name: "O nome do grupo informado está inválido",
      name_max_length_100:
        "O grupo contém nome com o limite acima do máximo de 100 caracteres.",
      name_unique: "O nome do grupo já está sendo utilizado",
      description: "A descrição do grupo informado está inválido",
      permissions: "As permissões fornecidas encontram-se inválidas",
      not_found: "O grupo não foi encontrado",
      not_found_permission: "Algumas das permissões fornecidas estão inválidas",
    },
  },
  success: {
    post: "O seu cadastro foi criado com sucesso!",
    put: "O cadastro atualizado com sucesso!",
    delete: "O usuário foi excluído com sucesso!",
    recover_password: "Abra o e-mail e siga as instruções",
    alter_password: "A sua senha foi alterada com sucesso",
    patch_status: "Status alterado com sucesso!",
  },
  invalid: {
    name: "O nome do grupo informado está inválido",
    name_max_length_100:
      "O grupo contém nome com o limite acima do máximo de 100 caracteres.",
    name_unique: "O nome do grupo já está sendo utilizado",
    cpf: "O cpf encontra-se vazio ou com formato inválido",
    birthdate: "A data de nascimento informada do usuário encontra-se inválido",
    keyword: "A palavra chave do usuário encontra-se vazia ou inválida",
    password: "A senha encontra-se com o formato inválido ou inexistente",
    operation: "O token está inválido ou expirado",
    already_exists_cpf: "O CPF fornecido encontra-se em uso",
    status: "O status do usuário encontra-se inválido",
    not_found_invite: "O link acessado de convite está expirado ou inválido",
    incorrect_password_formatted:
      "A senha fornecida está com inválida ou encontra-se fora dos padrões permitidos",
    not_found_permission: "Algumas das permissões fornecidas estão inválidas",
    already_exists_phone: "O telefone informado encontra-se já utilizado",
    already_exists_email: "O e-mail informado encontra-se já utilizado",
    email_max_length_255:
      "O e-mail está com o limite acima do máximo de 255 caracteres.",
    phone_max_length_35:
      "O telefone com o limite acima do máximo de 35 caracteres.",
    not_found: "O usuário não foi encontrado",
    not_found_token: "O token é inválido ou é inexistente",
    created_at: "A data de criação informada do usuário encontra-se inválida",
    updated_at:
      "A data de atualização informada do usuário encontra-se inválida ",
  },
};
