import { Crypted } from "../types";

const LONGITUDE_SAL: number = 16;
const INITIALIZATION_VECTOR_LONGITUDE: number = LONGITUDE_SAL;

const bufferToBase64 = function (buffer: Iterable<number>) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)));
};
const base64ToBuffer = function (buffer: string) {
  return Uint8Array.from(atob(buffer), (c) => c.charCodeAt(0));
};

/*** encrypt parameters ***/
const encryptparameters = async function (crypted: Crypted) {
  const encoder = new TextEncoder();
  let algorithm = "AES-CBC";
  let keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(crypted.password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );
  return await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: encoder.encode(crypted.sal.toString()),
      iterations: crypted.iterations,
      hash: crypted.hash,
    },
    keyMaterial,
    { name: algorithm, length: crypted.longitude },
    false,
    ["encrypt", "decrypt"]
  );
};

/*** encrypt data ***/
export async function encrypt(password: string, textPlane: string) {
  const encoder = new TextEncoder();
  const sal = window.crypto.getRandomValues(new Uint8Array(16));
  const initializationVector = window.crypto.getRandomValues(
    new Uint8Array(16)
  );
  const bufferTextPlane = encoder.encode(textPlane);
  const crypted = {
    password,
    sal,
    iterations: 100000,
    longitude: 256,
    hash: "SHA-256",
  };
  const key = encryptparameters(crypted);
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-CBC", iv: initializationVector },
    await key,
    bufferTextPlane
  );
  return bufferToBase64([
    ...sal,
    ...initializationVector,
    ...new Uint8Array(encrypted),
  ]);
}

/*** decrypt data ***/
export async function decrypt(password: string, encriptadoEnBase64: string) {
  const decoder = new TextDecoder();
  const dataencrypt = base64ToBuffer(encriptadoEnBase64);
  const sal = dataencrypt.slice(0, LONGITUDE_SAL);
  const initializationVector = dataencrypt.slice(
    0 + LONGITUDE_SAL,
    LONGITUDE_SAL + INITIALIZATION_VECTOR_LONGITUDE
  );
  const crypted = {
    password,
    sal,
    iterations: 100000,
    longitude: 256,
    hash: "SHA-256",
  };
  const key = encryptparameters(crypted);
  const dataBuffer = await window.crypto.subtle.decrypt(
    { name: "AES-CBC", iv: initializationVector },
    await key,
    dataencrypt.slice(LONGITUDE_SAL + INITIALIZATION_VECTOR_LONGITUDE)
  );
  return decoder.decode(dataBuffer);
}
