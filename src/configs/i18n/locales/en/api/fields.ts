export const FieldsApiTranslations = {
  success: {
    post: "The field has been created successfully!",
    delete: "The field has been deleted successfully!",
  },
  invalid: {
    name: "The field name provided is invalid",
    name_max_length_100:
      "The field name exceeds the maximum limit of 100 characters.",
    component:
      "The field type provided is invalid or unavailable for this operation.",
    type: "The form type is invalid",
    type_max_length_50:
      "The field type exceeds the maximum limit of 50 characters.",
    scope: "The created field cannot be assigned to this group",
    is_required: "The 'Required' field was filled incorrectly",
    is_sensitive: "The 'Sensitive' field was filled incorrectly",
    group_id: "The specified group is invalid or deactivated",
    relation_id: "The related client does not exist or is invalid",
    value: "The field value is invalid",
    not_found: "The specified field does not exist or has been deleted",
    not_found_group: "The field's specified group is invalid or not registered",
  },
  groups: {
    invalid: {
      id: "The specified group is invalid",
      in_ids: "One or more of the specified groups are invalid",
      name: "The group name provided is invalid",
      name_contains: "The group name contains invalid characters",
      scope: "The scope of the group provided is invalid",
    },
  },
};
