import { useState, useEffect } from 'react';
import { getStarsCount } from '../utils/utils';

const CACHE_KEY = 'github_stars_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface CachedData {
  count: number;
  timestamp: number;
}

export const useStars = (): number => {
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    const fetchStars = async (): Promise<void> => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);

        if (cachedData) {
          const { count, timestamp }: CachedData = JSON.parse(cachedData);
          const now = Date.now();

          if (now - timestamp < CACHE_DURATION) {
            setStars(count);
            return;
          }
        }

        const count = await getStarsCount();

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            count,
            timestamp: Date.now(),
          })
        );

        setStars(count);
      } catch (error) {
        console.error('Error fetching stars:', error);

        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { count }: CachedData = JSON.parse(cachedData);
          setStars(count);
        }
      }
    };

    fetchStars();
  }, []);

  return stars;
};
