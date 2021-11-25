import type { ScheduleOptions } from 'node-cron';

/**
 * Type for Anzu configuration options.
 */
type AnzuConfig = {
  /**
   * Name of Anzu.
   */
  botName: string;

  /**
   * Enables administrator privileges (allow to make Anzu leave, issue sensitive commands, etc.).
   */
  enableAdmin: boolean;

  /**
   * Enables long reminders instead of a short one.
   */
  enableLongReminders: boolean;

  /**
   * Set up Anzu's timezone.
   */
  timezone: ScheduleOptions['timezone'];

  /**
   * Set up cleanup schedules.
   */
  cleanUpSchedules: ReadonlyArray<string>;

  /**
   * Set up reminder schedules.
   */
  reminderSchedules: ReadonlyArray<string>;
};

/**
 * Configuration of Anzu that conforms to the above.
 */
const DefaultAnzuConfig: AnzuConfig = {
  botName: 'Anzu',
  enableAdmin: true,
  enableLongReminders: true,
  timezone: 'Asia/Jakarta',
  cleanUpSchedules: ['00 01 * * *'],
  reminderSchedules: ['00 17 * * *'],
} as const;

export default DefaultAnzuConfig;
