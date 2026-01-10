export const ToursApiTranslations = {
  success: {
    imports: "Os passeios foram importados com sucesso",
    post: "O passeio foi criado com sucesso!",
    put: "O passeio foi atualizado com sucesso!",
    delete: "O passeio foi excluído com sucesso!",
    patch: "A categoria do(s) passeio(s) foi atualizada(os) com sucesso!",
  },
  agencies: {
    success: {
      post: "A agência foi adicionada ao passeio com sucesso!",
    },
  },
  periods: {
    success: {
      post: "O período do passeio foi atualizado com sucesso!",
    },
    invalid: {
      model: "O modelo informado do período do passeio encontra-se inválido",
      frequency: "A frequência fornecida encontra-se inválida.",
    },
  },
  galleries: {
    success: {
      post: "A galeria do passeio foi atualizada com sucesso!",
      delete: "A imagem da galeria do passeio foi removida com sucesso!",
    },
    invalid: {
      image_id: "A imagem informada da galeria do passeio encontra-se inválida",
    },
  },
  address: {
    success: {
      post: "O endereço do passeio foi atualizado com sucesso!",
    },
    invalid: {
      country: "O país informado do endereço do passeio encontra-se inválido",
      state: "O estado informado do endereço do passeio encontra-se inválido",
      city: "A cidade informada do endereço do passeio encontra-se inválida",
      zip_code: "O CEP informado do endereço do passeio encontra-se inválido",
      street: "A rua informada do endereço do passeio encontra-se inválida",
      number: "O número informado do endereço do passeio encontra-se inválido",
      complement:
        "O complemento informado do endereço do passeio encontra-se inválido",
      complement_contains:
        "O complemento informado do endereço do passeio encontra-se inválido",
      type: "O tipo informado do endereço do passeio encontra-se inválido",
      start:
        "O valor de início dos registros do endereço do passeio está inválido",
      limit:
        "O valor de limite dos registros do endereço do passeio está inválido",
    },
  },
  rules: {
    success: {
      post: "A regra do passeio foi atualizada com sucesso!",
    },
    invalid: {
      type: "O tipo informado da regra do passeio encontra-se inválido",
      action: "A ação informada da regra do passeio encontra-se inválida",
      expression: "A expressão informada da regra do passeio encontra-se inválida",
      applies_at: "O campo de aplicação da regra do passeio encontra-se inválido",
      price: "O preço informado da regra do passeio encontra-se inválido",
      amount: "A quantidade informada da regra do passeio encontra-se inválida",
      start: "O valor de início dos registros da regra do passeio está inválido",
      limit: "O valor de limite dos registros da regra do passeio está inválido",
    }
  },
  invalid: {
    id: "O tour não pode ser encontrado com o ID informado",
    data: "O sistema encontrou um problema. Tente novamente mais tarde",
    path: "O sistema encontrou um problema. Tente novamente mais tarde",
    in_ids: "Os passeios informados encontram-se com alguma irregularidade",
    client: "O passeio informado encontra-se inexistente ou inválido",
    short_description: "O passeio informado encontra-se inexistente ou inválido",
    clients: "Os passeios informados encontram-se inexistentes ou inválidos",
    agency_id:
      "A agência informada do passeio encontra-se inexistente ou inválida",
    name: "O nome informado do passeio encontra-se inválido",
    name_max_length_100:
      "O passeio contém nome com o limite acima do máximo de 100 caracteres.",
    loogotype: "O avatar do passeio contém uma url inválida",
    title_contains: "O título do passeio contém palavras inválidas",
    video: "O vídeo do passeio contém uma url inválida",
    slots: "O número de vagas do passeio encontra-se inválido",
    currency: "A moeda informada do passeio encontra-se inválida",
    unavailable_at: "O campo de indisponibilidade do passeio encontra-se inválido",
    available_at: "O campo de disponibilidade do passeio encontra-se inválido",
    featured: "O campo de destaque do passeio encontra-se inválido",
    status: "O status informado do passeio encontra-se inválido",
    price: "O preço informado do passeio encontra-se inválido",
    created_at: "A data de criação informada do passeio encontra-se inválida",
    updated_at:
      "A data de atualização informada do passeio encontra-se inválida",
    phone: "O telefone informado do passeio encontra-se utilizado ou inválido",
    phone_max_length_35:
      "O passeio contém telefone com o limite acima do máximo de 35 caracteres.",
    cnpj: "O CNPJ informado do passeio encontra-se inválido",
    describe: "A descrição informada do passeio encontra-se inválida",
    website: "O site informado do passeio encontra-se inválido",
    email: "O e-mail informado do passeio encontra-se inválido",
    email_max_length_255:
      "O passeio contém e-mail com o limite acima do máximo de 255 caracteres.",
    start: "O valor de início dos registros do passeio está inválido",
    limit: "O valor de limite dos registros do passeio está inválido",
    not_found_category: "A categoria escondida está inválida ou indisponível",
  },
};
