function analyzeTweet(tweet) {
  // If the tweet is empty or contains only spaces, return an empty object
  if (!tweet || tweet.trim().length === 0) {
    return {};
  }
  // Convert the tweet to lowercase and remove punctuation and special symbols
  const cleanedText = tweet
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF\s]/g, "");
  // Split the cleaned text by spaces into words
  const words = cleanedText.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = {};
  // Count occurrences for each word
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  return wordCount;
}

// QUnit Tests for analyzeTweet function
QUnit.module("تجارب الدالة analyzeTweet");

QUnit.test("تغريدة فيها كلمات متكررة بالعربي", function (assert) {
  const tweet = "أحب البرمجة البرمجة ممتعة جداً";
  const result = analyzeTweet(tweet);
  const expected = { أحب: 1, البرمجة: 2, ممتعة: 1, جداً: 1 };
  assert.deepEqual(
    result,
    expected,
    "الدالة لازم ترجع عدد مرات الكلمات بشكل صحيح: * لأحب تكون 1، * للبرمجة تكون 2، * للممتعة تكون 1، و* لجداً تكون 1."
  );
});

QUnit.test("تغريدة فيها كلمات متكررة بالإنجليزي", function (assert) {
  const tweet = "JavaScript is fun and fun to learn JavaScript";
  const result = analyzeTweet(tweet);
  const expected = { javascript: 2, is: 1, fun: 2, and: 1, to: 1, learn: 1 };
  assert.deepEqual(
    result,
    expected,
    "الدالة لازم ترجع عدد مرات الكلمات بشكل صحيح: * لjavascript تكون 2، * لis تكون 1، * لfun تكون 2، * لand تكون 1، * لto تكون 1، و* لlearn تكون 1."
  );
});

QUnit.test("تغريدة فيها علامات ترقيم ورموز خاصة", function (assert) {
  const tweet = "أهلاً، إزيك؟!";
  const result = analyzeTweet(tweet);
  const expected = { أهلاً: 1, إزيك: 1 };
  assert.deepEqual(
    result,
    expected,
    "في الحالة دي، الدالة شالت العلامات الغريبة ورجعت الكلمات بشكل صحيح: * لأهلاً تكون 1، و* لإزيك تكون 1."
  );
});

QUnit.test("تغريدة فاضية أو بتتكون من مسافات بس", function (assert) {
  const tweet = "   ";
  const result = analyzeTweet(tweet);
  const expected = {};
  assert.deepEqual(
    result,
    expected,
    "بالنسبة للتغريدة الفاضية أو اللي بتتكون من مسافات بس، الدالة لازم ترجع Object فاضي {}، وده لأن مفيش كلمات محتسبة."
  );
});
