let target = document.getElementById("dynamic")

function randomString() {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Rudy"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

function clearArr() {
  target.textContent="";
  dynamic(randomString());
}

// 커서 깜빡임
function cursor() {
  target.classList.toggle("active");
}
setInterval(cursor, 500);

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function() {
      dynamic(randomArr);
    }, 80)
  } else {
    setTimeout(clearArr, 3000);
  }
}
dynamic(randomString())