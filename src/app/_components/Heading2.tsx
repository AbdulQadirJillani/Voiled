import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode,
  className?: string
}

function Heading2({ children, className }: Props) {
  return (
    <h2 className={cn('text-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.35] tracking-tight', className)}>
      {children}
    </h2>
  )
}

export default Heading2