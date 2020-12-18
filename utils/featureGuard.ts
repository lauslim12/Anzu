import AppError from './appError';
import { isStringEmpty } from './generalUtilities';

type FeatureGuardType = {
  userId?: string;
  replyToken: string;
};

const featureGuard = ({ userId, replyToken }: FeatureGuardType): void => {
  if (isStringEmpty(userId)) {
    return;
  }

  if (userId !== process.env.ADMIN_USER_ID) {
    throw new AppError(
      'You are unauthorized to use this command!',
      401,
      replyToken
    );
  }
};

export default featureGuard;
