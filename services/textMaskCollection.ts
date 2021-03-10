export function usernameMask() {
  let mask = Array(49)
    .fill(1)
    .map(() => {
      return /[a-zA-Z\d]/;
    });

  mask = [/[a-zA-Z]/].concat(mask);
  return mask;
}

export function phoneNumberMask() {
  let mask = Array(20)
  .fill(1)
  .map(() => {
    return /[0-9\/]/;
  });

  return mask;
}

export function expiredDateCCMask() {
  let mask = Array(5)
  .fill(1)
  .map(() => {
    return /[0-9\/]/;
  });

  return mask;
}

export function numberPlateVehicleMask() {
  let mask = Array(10)
    .fill(1)
    .map(() => {
      return /[0-9\.]/;
    });

  mask = [/[0-9]/, /[0-9]/, /[a-zA-Z]/].concat(mask);
  return mask;

  return mask;
}

export function numberSMSCodeMask() {
  let mask = Array(6)
  .fill(1)
  .map(() => {
    return /[0-9\/]/;
  });

  return mask;
}

export function promotionCodeMask() {
  let mask = Array(20)
  .fill(1)
  .map(() => {
    return /[a-zA-Z0-9]/;
  });

  return mask;
}

export function passCodeMask() {
  let mask = Array(6)
  .fill(1)
  .map(() => {
    return /[0-9\/]/;
  });

  return mask;
}

