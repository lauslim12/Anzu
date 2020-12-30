import { Document } from 'mongoose';
import { ScheduleOptions } from 'node-cron';

/**
 * Type for the configuration file.
 */
export type AnzuConfigurationType = {
  botName: string;
  disableAdministrator: boolean;
  enableLongReminders: boolean;
  timezone: ScheduleOptions['timezone'];
  cleanUpSchedules: ReadonlyArray<string>;
  reminderSchedules: ReadonlyArray<string>;
};

/**
 * Types for main functions.
 */
export type BaseEventProcessType = {
  sourceId: string;
  sourceType: string;
  replyToken?: string;
};

export type BehaviorType = {
  replyToken: string;
} & BaseEventProcessType;

export type ScheduleType = {
  command: string;
  scheduler: string | undefined;
  replyToken: string;
} & BaseEventProcessType;

/**
 * Types for utility functions.
 */
export type FeatureGuardType = {
  userId?: string;
  replyToken: string;
};

export type ParseNotificationElementType = {
  deadline: Date;
  name: string;
};

export type ResponseInTextType = {
  name: string;
  text: string;
};

export type SourceIdAndType = {
  sourceId: string;
  sourceType: string;
};

/**
 * Interfaces for Mongoose Models.
 */
export interface SourceType extends Document {
  sourceId: string;
  sourceType: string;
  dateAdded?: Date;
}

export interface TaskType extends Document {
  sourceId: string;
  name: string;
  deadline: Date;
  scheduler: string | undefined;
  sourceType: string;
  dateAdded?: Date;
}
