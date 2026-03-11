type StatusMessageProps = 
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; dataCount: number };

const StatusBanner = (props: StatusMessageProps) => {
  switch (props.status) {
    case 'loading':
      return <div className="animate-pulse text-blue-500">Loading assets...</div>;
    case 'error':
      return <div className="text-red-500">Error: {props.message}</div>;
    case 'success':
      return <div className="text-green-500">Successfully loaded {props.dataCount} items!</div>;
  }
};