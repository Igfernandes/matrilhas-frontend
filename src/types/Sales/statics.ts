/* ===========================
 * SALES STATICS RESPONSE
 * =========================== */

export type SalesStaticsResponse = {
  totals: SalesTotals;
  dates: Array<SalesDateShape>;
  clients: ClientSalesStatics[];
  tours: TourSalesStatics[];
  agencies: AgencySalesStatics[];
};

export type SalesDateShape = {
  total_sales: number;
  total_revenue: number;
  date: string;
};

/* ===========================
 * TOTALS
 * =========================== */

export type SalesTotals = {
  sold: number; // total PAID
  pending: number; // total PENDING
  canceled: number; // total CANCELED
};

/* ===========================
 * CLIENTS
 * =========================== */

export type ClientSalesStatics = {
  id: number;
  name: string;
  total_purchases: number;
};

/* ===========================
 * TOURS
 * =========================== */

export type TourSalesStatics = {
  id: number;
  title: string;
  total_sales: number;
};

/* ===========================
 * AGENCIES
 * =========================== */

export type AgencySalesStatics = {
  id: number;
  name: string;
  total_sales: number;
  tours: AgencyTourSalesStatics[];
};

export type AgencyTourSalesStatics = {
  id: number;
  title: string;
  total_sales: number;
};
