import { Camera } from "lucide-react"

type test = {
  props: string
}

export default function CameraSymbol({props}: test) {
  return (
    <div className="flex items-center justify-center p-4">
      <Camera style={{ color: 'black', backgroundColor: props, padding: 6, borderRadius: 10 }} className="w-12 h-12" />
    </div>
  );
}

