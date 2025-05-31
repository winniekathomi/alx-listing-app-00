// interfaces/index.ts

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string; // empty string if no discount, otherwise discount percent as string
}

export interface FilterPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}
