const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfN9TuPObcFYF5e6gay9iDZGnuEat_Y0r8DWR-qN2QSM5mt8EEti7i8sQyWCd7fDFdRHzR0ePCdjSwfz",
  client_secret: "EN85MRAK72unDF021n53DVPVohkMZz2nvcFGZdxjpElmV356ltWeuHPqgKWkauv-LFUu8UwlatYBFeyb",
});

module.exports = paypal;
