import { EmotionCache } from '@emotion/cache';
import { AppProps } from 'next/app';

export type NextAppProps = AppProps & {
  emotionCache: EmotionCache;
};
