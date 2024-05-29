import { MouseEventHandler } from "react";

export interface BikeProps {
  make:string
  model:string
  year:string
  type:string
  displacement:string
  engine:string
  power:string
  torque:string
  compression:string
  bore_stroke:string
  valves_per_cylinder:string
  fuel_system:string
  fuel_control:string
  ignition:string
  lubrication:string
  cooling:string
  gearbox:string
  transmission:string
  clutch:string
  frame:string
  front_suspension:string
  front_wheel_travel:string
  rear_suspension:string
  rear_wheel_travel:string
  front_tire:string
  rear_tire:string
  front_brakes:string
  rear_brakes:string
  total_weight:string
  seat_height:string
  total_height:string
  total_length:string
  total_width:string
  ground_clearance:string
  wheelbase:string
  fuel_capacity:string
  starter:string
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface BikeCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}