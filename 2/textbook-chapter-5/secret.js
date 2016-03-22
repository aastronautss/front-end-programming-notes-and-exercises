function getSecret(file, password) {
  file.opened += 1;
  if (password == file.password) {
    return file.contents;
  } else {
    return "Invalid password, no secret";
  }
}

function setSecret(file, password, secret) {
  if (password == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}

var secret_file = {
  level: "classified",
  opened: 0;
  password: 2;
  contents: "Stuff"
}

var secret = getSecret(secret_file, "2");
console.log(secret);

setSecret(secret_file, "2", "Other stuff");
secret = getSecret(secret_file, "2");

console.log(secret);
