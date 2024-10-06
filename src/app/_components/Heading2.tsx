import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode,
  className?: string
}

function Heading2({ children, className }: Props) {
  return (
    <h2 className={cn('text-heading text-xl md:text-2xl lg:text-3xl font-bold leading-[1.35] tracking-tight w-fit relative isolate', className)}>
      {children}
      <span className="absolute z-[-10] h-3 w-full bottom-[1px] left-0 bg-gradient-to-r from-btn1 to-gradient2"></span>
    </h2>
  )
}

export default Heading2