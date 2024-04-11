interface LoadingProps {
    status: TLoading,
    error: TError,
    children: React.ReactNode,
}

const Status = ({status, error, children}: LoadingProps) => {
    if(status === 'pending') {
        return <p>Loading...</p>
    } else if(status === 'failed') {
        return <p>{error}</p>
    } else {
        return (
          <>
            {children}
          </>
        )
    }
}

export default Status