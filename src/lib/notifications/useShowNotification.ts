import { useToast } from "@/hooks/use-toast";

/**
 * Custom hook for showing notifications
 *
 * This hook provides a convenient way to show toast notifications
 * throughout the application.
 *
 * @returns {Function} A function to show toast notifications
 *
 * @example
 * const showNotification = useShowNotification();
 * showNotification({ title: "Success", description: "Operation completed successfully" });
 */
const useShowNotification = () => {
  const { toast } = useToast();

  return toast;
};

export default useShowNotification;
