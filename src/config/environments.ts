/**
 * Returns value stored in environment variable with the given 'name'.
 * Throws Error if no such variable or if variable undefined; thus ensuring type-safety.
 *
 * @param name - name of variable to fetch from this process's environment.
 * @returns A valid environment variable
 */
const env = (name: string) => {
  const value = process.env[name.toString()];
  if (!value) {
    throw new Error(`Missing environment variable: '${name}'!`);
  }

  return value;
};

/**
 * Configure all environment variables for the application.
 */
const environments = {
  port: env(process.env.PORT),
  database: env(process.env.DATABASE),
  line: {
    channelAccess: env(process.env.CHANNEL_ACCESS_TOKEN),
    channelSecret: env(process.env.CHANNEL_SECRET),
  },
};

export default environments;
