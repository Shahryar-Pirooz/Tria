import 'dart:html';
import 'package:crypto/crypto.dart';
import 'dart:convert';


void main() {
  TextInputElement name = document.querySelector('#name') as TextInputElement;
  PasswordInputElement code = document.querySelector('#code') as PasswordInputElement;
  TextInputElement domain = document.querySelector('#domain') as TextInputElement;
  ButtonElement btn = document.querySelector('#btn') as ButtonElement;
  var getStrings = {};

  name.onChange.listen((_){
    getStrings['name'] = name.value.toString().toLowerCase();
  });
  code.onChange.listen((_){
    getStrings['code'] = code.value.toString();
  });
  domain.onChange.listen((_){
    getStrings['domain'] = domain.value.toString().toLowerCase();
  });
  btn.onClick.listen((_){
    btn.text = passwordGenerator(getStrings);
    name.value = null;
    code.value = null;
    domain.value = null;
    copyPass(btn.text);
  });
}

void copyPass(var pass){
  final textarea = TextAreaElement();
  document.body?.append(textarea);
  textarea.style.border = '0';
  textarea.style.margin = '0';
  textarea.style.padding = '0';
  textarea.style.opacity = '0';
  textarea.style.position = 'absolute';
  textarea.readOnly = true;
  textarea.value = pass;
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

String passwordGenerator(Map strings){
  var symbols = '!#\$%&()*<=>?@[]^_{}~';
  var name = strings['name'] ?? 'tria';
  var code = strings['code']  ?? 'tria';
  var domain = strings['domain'] ?? 'tria';
  var bytes = utf8.encode("$name$domain");
  var hmac256 = Hmac(sha256, utf8.encode(code));
  var digest = hmac256.convert(bytes).toString();
  var password = '';
  for (var i = 0 ; i<5 ; i++){
    password+=symbols[(bytes[0]+bytes[1])%(symbols.length -i)];
  }
  password = digest.substring(0,3) + password[0] +
              digest.substring(3,6).toUpperCase() + password[1] +
              digest.substring(6,9) + password[2] +
              digest.substring(9,12).toUpperCase() + password[3] ;

  return password;
}
