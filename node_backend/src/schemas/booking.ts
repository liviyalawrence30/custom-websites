export interface BookingCreate {
  name: string;
  company_name: string;
  email: string;
  phone: string;
  budget_range: string;
  date: string;
  time: string;
}

export interface BookingResponse extends BookingCreate {
  id: number;
  status: string;
}