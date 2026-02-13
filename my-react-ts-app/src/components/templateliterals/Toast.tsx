type Horizontalposition = "left" | "center" | "right";

type Verticalposition = "top" | "center" | "bottom";

type ToastPosition = {
  position:
    | Exclude<`${Horizontalposition}-${Verticalposition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastPosition) => {
  return <div>Toast notification position - {position}</div>;
};

export default Toast;
