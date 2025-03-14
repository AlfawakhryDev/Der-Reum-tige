function analyzeTweet(tweet) {
  if (!tweet.trim()) {
    return {};
  }

  // تحويل النص الى lowercase وازالة علامات الترقيم
  const cleanedTweet = tweet
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "") // ازالة علامات الترقيم
    .replace(/\s+/g, " "); // ازالة المسافات الزائدة

  const words = cleanedTweet.split(" ");
  const wordCount = {};

  for (let word of words) {
    if (word) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  }

  return wordCount;
}
