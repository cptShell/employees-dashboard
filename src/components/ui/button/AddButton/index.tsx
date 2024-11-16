import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import addAnimation from "@/asset/animations/add.json";
import { RoutePath } from "@/common/enum";

export const AddButton = () => {
  return (
    <Link to={`${RoutePath.EMPLOYEES}/create`}>
      <div style={{ width: 100, height: 100 }}>
        <Lottie animationData={addAnimation} />
      </div>
    </Link>
  );
}
