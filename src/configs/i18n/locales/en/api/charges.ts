export const chargesApiTranslations = {
  relations: {
    success: {
      post: "The charge was successfully assigned to the related entities!",
    },
  },
  extracts: {
    not_found: "The statement was not found",
  },
  checkout: {
    success: {
      post: "Please wait to complete your purchase!",
    },
    invalid: {
      name: "The entered name is invalid",
      name_max_length_100:
        "The name exceeds the maximum limit of 100 characters.",
      phone: "The client's phone number is invalid",
      phone_max_length_35:
        "The phone number exceeds the maximum limit of 35 characters.",
      amounts: "The selected quantity is invalid",
      email: "The email is missing or invalid",
      email_max_length_255:
        "The client's email exceeds the maximum limit of 255 characters.",
      birthdate: "The provided birth date is invalid",
      product: "The provided product is invalid or does not exist",
    },
  },
  operations_failures: {
    success: {
      post: "The financial operation was resolved successfully",
    },
    not_found: "The operation was not found",
    invalid: {
      operation_failed: "The operation could not be found or resolved",
      not_found: "The operation was not found",
    },
  },
  success: {
    post: "The charge was created successfully!",
    delete: "The charge was deleted successfully!",
    put: "The charge was updated successfully!",
  },
  again_submit:
    "The form contains outdated information. Please submit it again.",
  invalid: {
    id: "The charge does not exist or is invalid",
    in_ids: "The informed charges have some irregularities",
    title: "The charge title is invalid or does not exist",
    description: "The charge description is invalid",
    status: "The charge status is invalid",
    payment_id: "The payment does not exist or is invalid",
    expired_days: "The expiration days for the charge are invalid",
    price: "The charge price is invalid",
    name: "The charge name is invalid",
    privacy: "Privacy can only be 'Public' or 'Private'",
    type: "The charge type is invalid",
    amount: "The charge amount is invalid",
    agency_id: "The informed agency does not exist or is invalid",
    client_id: "The informed client does not exist or is invalid",
    started_at: "The charge start date is invalid",
    not_found_bank: "The informed bank does not exist or is invalid",
    not_found_client: "The informed client does not exist or is invalid",
    not_found_agency: "The informed agency does not exist or is invalid",
    period: "The charge period is invalid",
    promotional_price: "The promotional charge price is invalid",
    reference: "The charge is invalid or does not exist",
    clients: "The informed clients do not exist or are invalid",
    not_available:
      "The selected charge does not exist or is unavailable",
    created_at: "The charge creation date is invalid",
    updated_at: "The charge update date is invalid",
    not_found: "The charge was not found",
    start: "The provided start period is invalid",
    limit: "The provided limit is invalid",
    name_or_service:
      "The charge requires either a name or a service to be selected",
    recaptcha:
      "The page has outdated resources. Reload and try again.",
  },
};
