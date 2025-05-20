export interface Meal {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  mealsNeeded: number;
  createdAt: string;
}

export interface Donation {
  id: string;
  fullName: string;
  email: string;
  items?: string;
  message?: string;
  createdAt: string;
}