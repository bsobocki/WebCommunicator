export type AppContainerProps = React.PropsWithChildren;

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <div style={{ height: '100vh', width: '100vw', background: 'rgba(25, 25, 10)' }}>{children}</div>;
};
