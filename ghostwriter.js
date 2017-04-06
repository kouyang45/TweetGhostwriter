function writeTweet()
{
  var intro = ["No act of kindness is ever to small and wasted,", "When we seek to discover the best in other, we somehow bring out the best in ourselves,", "A champion is someone who gets up when he can't,", "Shoot for the moon and if you miss you will still be among the stars,"];
  var body = ["with this weather,", "in the first sight of snowfall,", "beside the clam sound of waterflow,", "to hear music speak to us,", "to rise as the morning sunrise,"]
  var end = ["for a good day.", "for a good life."]
  var randIndex = randomUpTo(intro.length-1);
  var sentence = intro[randIndex];
  randIndex = randomUpTo(body.length-1)
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo(end.length-1)
  sentence = sentence + " " + end[randIndex];
  document.getElementById("tweet").innerHTML=sentence
}
//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
