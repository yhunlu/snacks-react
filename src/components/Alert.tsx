
interface Props {
    children: React.ReactNode
}

const Alert = ({ children }: Props) => {
  return (
    // Alert
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  )
}

export default Alert