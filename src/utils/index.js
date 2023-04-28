export const beautifyTimeDiff = (minutes) => {
  const r = (t) => Math.round(t);

  switch (true) {
    case r(minutes) < 2:
      return "1 minute ago";
    case r(minutes) <= 59:
      return `${r(minutes)} minutes ago`;
    case r(minutes) <= 119:
      return "1 hour ago";
    case r(minutes / 60) <= 23:
      return `${r(minutes / 60)} hours ago`;
    case r(minutes / 60) <= 47:
      return "1 day ago";
    case r(minutes / 60 / 24) <= 30:
      return `${r(minutes / 60 / 24)} days ago`;
    case r(minutes / 60 / 24) <= 61:
      return "1 month ago";
    case r(minutes / 60 / 24 / 31) <= 11:
      return `${r(minutes / 60 / 24 / 31)} months ago`;
    default:
      return `${Math.floor(minutes / 60 / 24 / 31 / 12)} years ago`;
  }
};