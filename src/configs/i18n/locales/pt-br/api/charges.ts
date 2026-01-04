export const chargesApiTranslations = {
  relations: {
    success: {
      post: "A cobrança foi atribuída aos relacionados com sucesso!",
    },
  },
  extracts: {
    not_found: "O extrato não foi encontrado",
  },
  checkout: {
    success: {
      post: "Aguarde para finalizar a sua compra!",
    },
    invalid: {
      name: "O nome inserido informado está inválido",
      name_max_length_100:
        "O nome contém o limite acima do máximo de 100 caracteres.",
      phone: "O telefone informado do cliente encontra-se inválido",
      phone_max_length_35:
        "O telefone com o limite acima do máximo de 35 caracteres.",
      amounts: "A quantidade selecionada está inválida",
      email: "O e-mail encontra-se inexiste ou inválido",
      email_max_length_255:
        "O cliente contém e-mail com o limite acima do máximo de 255 caracteres.",
      birthdate: "A data de nascimento informada encontra-se inválido",
      product: "O produto informado encontra-se inválido ou inexistente",
    },
  },
  operations_failures: {
    success: {
      post: "A operação financeira foi solucionada com sucesso",
    },
    not_found: "A operação não foi encontrada",
    invalid: {
      operation_failed: "A operação não pode ser encontrada ou resolvida",
      not_found: "A operação não foi encontrada",
    },
  },
  success: {
    post: "A cobrança foi criada com sucesso!",
    delete: "A cobrança foi excluído com sucesso!",
    put: "A cobrança foi atualizado com sucesso!",
  },
  again_submit:
    "O formulário contem informações desatualizadas. Envie novamente,.",
  invalid: {
    id: "A cobrança informado não existe ou está inválido",
    in_ids: "As cobranças informadas encontram-se com alguma irregularidade",
    title: "O título da cobrança informada está inválido ou inexistente",
    description: "A descrição da cobrança informada está inválido",
    status: "O status da cobrança encontra-se inválido",
    charge_id: "A cobrança está inválida ou não existe",
    service_id: "O serviço está inválido ou não existe",
    payment_id: "O pagamento não existe ou está inválido",
    price: "O preço da cobrança é inválido",
    privacy: "A privacidade só poderá ser 'Publica' e 'Privado'",
    type: "O tipo da cobrança está inválido",
    amount: "A quantidade da cobrança está inválido",
    period: "O período da cobrança está inválido",
    promotional_price: "O preço promocional da cobrança é inválido",
    reference: "A cobrança está inválida ou não existe",
    clients: "Os clientes informados encontram-se inexistentes ou inválidos",
    not_available:
      "A cobrança selecionada não existe ou encontra-se indisponível",
    created_at: "A data de criação da cobrança está inválida",
    updated_at: "A data de atualização da cobrança está inválida",
    not_found: "A cobrança não foi encontrada",
    not_found_client: "O cliente escolhido não foi encontrado",
    name_or_service:
      "A cobrança precisa que seja preenchido um nome ou escolhido um serviço",
    recaptcha:
      "A página está com recursos desatualizados. Recarregue e tente novamente.",
  },
};
