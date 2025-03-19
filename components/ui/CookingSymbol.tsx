import { ChefHat } from "lucide-react"

type test = {
  props: string
}

export default function ChefHatIcon({props}: test) {
  return (
    <div className="flex items-center justify-center p-4">
      <ChefHat style={{ color: 'black', backgroundColor: props, padding: 6, borderRadius: 10 }} />
    </div>
  )
}
