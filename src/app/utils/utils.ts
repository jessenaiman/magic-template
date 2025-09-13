export const getStarsCount = async (): Promise<number> => {
  try {
    const response = await fetch('https://api.github.com/repos/jessenaiman/magic-template');
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }
    const data = await response.json();
    return data.stargazers_count || 0;
  } catch (error) {
    console.error('Error fetching stars count:', error);
    return 0;
  }
};
