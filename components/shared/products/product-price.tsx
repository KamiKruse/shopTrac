import { cn } from "@/lib/utils"

interface ProductPriceProps {
  value: number
  className?: string
}

export default function ProductPrice({ value, className }: ProductPriceProps) {
  const stringValue = value.toFixed(2)

  const [intValue, floatValue] = stringValue.split('.')
  return <div className={cn('text-2xl', className)}>
    <span className="text-sm align-super">$</span>
    {intValue}
    <span className="text-sm align-super">.{floatValue}</span>
  </div>
}
