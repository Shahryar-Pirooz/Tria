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
    getStrings['name'] = name.value.toString();
  });
  code.onChange.listen((_){
    getStrings['code'] = code.value.toString();
  });
  domain.onChange.listen((_){
    getStrings['domain'] = domain.value.toString();
  });
  btn.onClick.listen((_){
    copyPass(passwordGenerator(getStrings));
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
  var name = strings['name'] ?? 'tria';
  var code = strings['code']  ?? 'tria';
  var domain = strings['domain'] ?? 'tria';
  var bytes = utf8.encode("$name$domain");
  var digest = sha256.convert(bytes);
  print('$bytes , $digest');
  return '$name$code$domain';
}
