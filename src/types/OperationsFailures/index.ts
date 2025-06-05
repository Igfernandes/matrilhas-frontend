export type OperationFailureShape = {
  id: number;
  operation_type?: string;
  provider?: string;
  error_message?: string;
  error_code?: number;
  payload_set?: string;
  response_received?: Record<string, unknown>;
  attempt_number?: number;
  should_retry?: boolean;
  status: "PENDING" | "RETRYING" | "FAILED" | "RESOLVED";
  resolved_at?: string;
  created_at?: string;
  updated_at?: string;
};

export type StatusOperationsFailures =
  | "PENDING"
  | "RETRYING"
  | "FAILED"
  | "RESOLVED";
