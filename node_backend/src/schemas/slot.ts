export interface SlotCreate {
  date: string;
  time: string;
}

export interface SlotResponse extends SlotCreate {
  id: number;
  is_available: boolean;
}
