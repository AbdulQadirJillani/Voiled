import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode,
  className: string
}

function Text({ children, className }: Props) {
  return (
    <p className={cn('text-lg text-text', className)}>
      {children}
    </p>
  )
}

export default Text