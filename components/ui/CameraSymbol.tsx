import tw from "tailwind-react-native-classnames";

const cameraStyle = ``

export default function CameraSymbol() {
  return (
    <svg viewBox="0 0 100 100" width="70" height="70">
      {/* Simple Camera Shape */}
      <path
        d="M15,30 H85 C95,30 95,70 85,70 H15 C5,70 5,30 15,30 Z"
        fill="#2c3e50"
      />
      {/* Camera Top */}
      <path
        d="M30,25 H70 C75,25 75,30 70,30 H30 C25,30 25,25 30,25 Z"
        fill="#2c3e50"
      />
      {/* Camera Lens */}
      <path
        d="M35,50 C35,40 45,40 50,40 C55,40 65,40 65,50 C65,60 55,60 50,60 C45,60 35,60 35,50 Z"
        fill="#ffffff"
        stroke="#2c3e50"
        strokeWidth="10"
      />
    </svg>
  );
}
