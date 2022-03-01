var n = 9;

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x == 1 || x == 5 || x == 9 || y == 1 || y == 5 || y == 9) {
      document.write("&nbsp" + "*");
    } else {
      document.write("- &nbsp");
    }
  }
  document.write("<br>");
}
