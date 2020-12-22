import { AnzuConfigurationType } from '../types';

// Deep freeze object to prevent changing on runtime.
const personalAnzuConfigurations: AnzuConfigurationType = {
  botName: 'Anzu',
  disableAdministrator: false,
  enableLongReminders: true,
  timezone: 'Asia/Jakarta',
  cleanUpSchedules: ['00 01 * * *'],
  reminderSchedules: ['00 17 * * *'],
} as const;

export default personalAnzuConfigurations;
