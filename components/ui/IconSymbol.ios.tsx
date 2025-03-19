import { Home } from "lucide-react"
import { View } from "lucide-react"

type test = {
  props: string
}

export default function HomeIcon({props}: test) {
  return (
    <div>
      <Home style={{ color: 'black', backgroundColor: props, padding: 6, borderRadius: 10 }} className="w-12 h-12 text-gray-800" />
    </div>
  )
}