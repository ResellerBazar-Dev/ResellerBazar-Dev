function toBase64(data) {
  return Buffer.from(`${data}`).toString("base64");
}

function toNormalString(data) {
  return Buffer.from(data, "base64").toString("ascii");
}

const utils = { toBase64, toNormalString };

export default utils;
