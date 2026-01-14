export const publicRoutes = {
  access: "/access",
  accessForgotPasswords: "/access/forgot-password",
  login: "/login",
  forgotPassword: "/forgot-password",
  successful: "/successful",
  forms: "/forms",
  agencies: "/agencies",
  checkout: "/checkout",
  tours: "/tours",
  galleries: "/galleries",
};
export const privateAgencyRoutes = {
  overview: "/panel/overview",
  charges: "/panel/charges",
  sales: "/panel/sales",
  statics: "/panel/statics",
  tours: "/panel/tours",
  logout: "/panel/logout",
  settings: "/panel/settings",
};

export const privateClientsRoutes = {
  overview: "/account/overview",
  charges: "/account/charges",
  sales: "/account/sales",
  statics: "/account/statics",
  tours: "/account/tours",
  logout: "/account/logout",
  settings: "/account/settings",
};

export const privateRoutes = {
  panel: privateAgencyRoutes,
  account: privateClientsRoutes,

  dashboard: "/dashboard/overview",
  clients: "/dashboard/clients",
  agencies: "/dashboard/agencies",
  sales: "/dashboard/sales",
  operations: "/dashboard/operations",
  statics: "/dashboard/statics",
  tours: "/dashboard/tours",
  dispatcher: "/dashboard/dispatcher",
  subscribers: "/dashboard/subscribers",
  forms: "/dashboard/forms",
  schedule: "/dashboard/schedule",
  galleries: "/dashboard/galleries",
  finance: "/dashboard/charges",
  charges: "/dashboard/charges",
  financesCreate: "/dashboard/charges/create",
  financePayments: "/dashboard/charges/{id}/payment/{payment_id}",
  usersManager: "/dashboard/users",
  userGroups: "/dashboard/groups",
  apisManager: "/dashboard/apis",
  settings: "/dashboard/settings",
  logout: "/dashboard/logout",
};
