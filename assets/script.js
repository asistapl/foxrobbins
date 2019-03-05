function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o
}

var title = document.querySelector(".title")
var text = new SplitText(title, { type: "words, chars" })
shuffle(text.chars)

TweenMax.staggerFrom(
  text.chars,
  1,
  {
    opacity: 0,
    x: 20,
    ease: Power2.easeOut
  },
  0.02,
  () => title.classList.add("showUnderline")
)
