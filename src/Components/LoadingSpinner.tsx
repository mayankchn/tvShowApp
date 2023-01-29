import { FC } from "react";
import { ImSpinner } from "react-icons/im";

type LoadingSpinnerProps = {
  className?: string;
}

const LoadingSpinner:FC<LoadingSpinnerProps> = ({ className }) => {
  return <ImSpinner className={`animate-spin ${className}`} />;
};

export default LoadingSpinner;
