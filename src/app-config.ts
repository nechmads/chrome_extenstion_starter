interface AppConfig {
  SIGN_IN_WITH_GOOGLE: boolean;
  SIGN_IN_WITH_EMAIL: boolean;
}

const config: AppConfig = {
  SIGN_IN_WITH_EMAIL: true,
  SIGN_IN_WITH_GOOGLE: true,
};

export default config;
