import supabase from "@/services/supabase";

/**
 * Get the current user's ID from the Supabase session
 * @returns {Promise<string | null>} The user ID if authenticated, null otherwise
 */
async function getCurrentUserId() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    return null;
  }
  return data.session?.user.id;
}

/**
 * Analytics class
 *
 * This class provides methods for tracking user actions and identifying users
 * in the analytics system.
 */
export class Analytics {
  /**
   * Identify a user in the analytics system
   * @param {string} userId - The unique identifier for the user
   * @param {string} email - The user's email address
   * @param {string} [name] - The user's name (optional)
   */
  static async identifyUser(userId: string, email: string, name?: string) {
    //TODO: Add a call to your analytics provider to track the logged in user
    console.log("Identifying user:", { userId, email, name });
  }

  /**
   * Track a screen view in the analytics system
   * @param {string} screenName - The name of the screen being viewed
   * @param {object} [properties] - Additional properties to track with the screen view
   */
  static async trackScreenView(screenName: string, properties: object = {}) {
    const userId = await getCurrentUserId();

    if (userId) {
      //TODO: Add a call to GA, Segment, etc to track current screen for authenticated user
      console.log("Tracking authenticated screen view:", { userId, screenName, properties });
    } else {
      //TODO: Add a call to GA, Segment, etc to track current screen for unauthenticated user
      console.log("Tracking unauthenticated screen view:", { screenName, properties });
    }
  }
}
