import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode,
  className?: string
}

function Heading3({ children, className }: Props) {
  return (
    <h3 className={cn('text-heading text-xl md:text-2xl font-bold leading-[1.35] tracking-tight', className)}>
      {children}
    </h3>
  )
}

export default Heading3