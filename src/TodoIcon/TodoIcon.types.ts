export interface TodoIconProps {
  type: "check" | "delete";
  color: string;
  onClick?: () => void;
}