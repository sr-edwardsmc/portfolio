const RATE_LIMIT_KEY = "email_form_submission";
const MAX_SUBMISSIONS = 2;
const TIME_WINDOW = 60 * 60 * 1000;

export const checkRateLimit = (): boolean => {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const now = Date.now();

  if (!stored) {
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify([now]));
    return true;
  }

  const submissions = JSON.parse(stored) as number[];
  const recentSubmissions = submissions.filter(
    (timestamp) => now - timestamp < TIME_WINDOW
  );

  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    return false;
  }

  recentSubmissions.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  return true;
};

export const getTimeUntilNextSubmission = (): number => {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  if (!stored) return 0;

  const submissions = JSON.parse(stored) as number[];
  const now = Date.now();
  const oldestSubmissions = Math.min(...submissions);
  return Math.ceil((oldestSubmissions + TIME_WINDOW - now) / 1000 / 60);
};
