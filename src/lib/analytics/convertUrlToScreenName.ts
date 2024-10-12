/**
 * Convert a URL path to a screen name for analytics tracking
 *
 * This function maps URL paths to human-readable screen names
 * for use in analytics tracking.
 *
 * @param {string} url - The URL path to convert
 * @returns {string} The corresponding screen name
 */
export function convertUrlToScreenName(url: string): string {
  switch (url) {
    case "/auth/home":
      return "Auth Home";

    case "/auth/namestep":
      return "Auth Name Step";

    case "/auth/emailstep":
      return "Auth Email Step";

    case "/auth/emailotpstep":
      return "Auth Email OTP Step";

    case "/app/home":
      return "App Home";

    default:
      return url;
  }
}
