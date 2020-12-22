import { Document } from 'mongoose';

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

export type ResponseInTextType = {
  name: string;
  text: string;
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
