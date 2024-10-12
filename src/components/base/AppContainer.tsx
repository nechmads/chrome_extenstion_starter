/**
 * AppContainer Component
 *
 * This component serves as the root container for the entire application.
 * It's a simple wrapper that renders its children without adding any additional
 * structure or styling. This can be useful for applying global styles or context
 * providers in the future if needed.
 *
 * @component
 * @example
 * <AppContainer>
 *   <YourAppContent />
 * </AppContainer>
 */

interface AppContainerProps {
  /** The child elements to be rendered within the container */
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <>{children}</>;
};

export default AppContainer;
