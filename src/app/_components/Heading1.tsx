import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode,
  className?: string
}

function Heading1({ children, className }: Props) {
  return (
    <h1 className={cn('text-heading text-3xl lg:text-5xl font-bold leading-[1.5] tracking-tight', className)}>
      {children}
    </h1>
  )
}

export default Heading1