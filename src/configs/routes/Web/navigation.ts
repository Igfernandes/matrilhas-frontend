
export const publicRoutes = {
  login: "/login",
  forgotPassword: "/forgot-password",
  successful: "/successful",
  forms: "/forms",
  agencies: "/agencies",
  tours: "/tours",
  galleries: "/galleries",
};

export const privateRoutes = {
  dashboard: "/dashboard",
  clients: "/dashboard/clients",
  agencies: "/dashboard/agencies",
  sales: "/dashboard/sales",
  operations: "/dashboard/operations",
  statics: "/dashboard/statics",
  tours: "/dashboard/tours",
  dispatcher: "/dashboard/dispatcher",
  forms: "/dashboard/forms",
  schedule: "/dashboard/schedule",
  galleries: "/dashboard/galleries",
  finance: "/dashboard/finance",
  financesCreate: "/dashboard/finance/create",
  financePayments: "/dashboard/finance/{id}/payment/{payment_id}",
  usersManager: "/dashboard/users",
  userGroups: "/dashboard/users/groups",
  apisManager: "/dashboard/apis",
  settings: "/dashboard/settings",
  logout: "/dashboard/logout",
};
