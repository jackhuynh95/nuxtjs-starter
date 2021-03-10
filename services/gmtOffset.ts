var hrs = -(new Date().getTimezoneOffset() / 60);
function getOffset(): string {
  let v;
  if (hrs > 0) {
    v = '+' + hrs;
  } else {
    v = hrs.toString();
  }

  return v;
}

export default {
  getOffset,
}
