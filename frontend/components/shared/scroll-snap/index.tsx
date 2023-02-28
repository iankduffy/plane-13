

// Set up a custom typescript type for child
interface Props {
  children: string | JSX.Element | JSX.Element[]
  customClasses?: string
}

export function ScrollSnap ({ children, customClasses = ''}: Props) : JSX.Element {
  const scrollClasses = `snap-mandatory snap-x flex ${customClasses}`

  return (
    <div className={scrollClasses}>
      {children}
    </div>
  )
}