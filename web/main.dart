import 'dart:html';
import 'dart:svg';
import 'package:crypto/crypto.dart';
import 'dart:convert';

void main() {
  TextInputElement name = document.querySelector('#name') as TextInputElement;
  PasswordInputElement code =
      document.querySelector('#code') as PasswordInputElement;
  TextInputElement domain =
      document.querySelector('#domain') as TextInputElement;
  ButtonElement btn = document.querySelector('#btn') as ButtonElement;
  LIElement nameHelp = document.querySelector('#name-help') as LIElement;
  LIElement codeHelp = document.querySelector('#code-help') as LIElement;
  LIElement domainHelp = document.querySelector('#domain-help') as LIElement;

  var getStrings = {};
  name.addEventListener('focus', (event) {
    nameHelp.classes.add('text-focus');
    codeHelp.classes.remove('text-focus');
    domainHelp.classes.remove('text-focus');
  }, true);
  code.addEventListener('focus', (event) {
    nameHelp.classes.remove('text-focus');
    codeHelp.classes.add('text-focus');
    domainHelp.classes.remove('text-focus');
  }, true);
  domain.addEventListener('focus', (event) {
    nameHelp.classes.remove('text-focus');
    codeHelp.classes.remove('text-focus');
    domainHelp.classes.add('text-focus');
  }, true);
  name.onChange.listen((_) {
    getStrings['name'] = name.value.toString().toLowerCase();
    if (name.value!.isNotEmpty || name.value.toString() != '') {
      name.classes.add('input-success');
    } else {
      name.classes.remove('input-success');
    }
  });
  code.onFocus.listen((event) {});
  code.onChange.listen((_) {
    getStrings['code'] = code.value.toString();
    if (name.value!.isNotEmpty || name.value.toString() != '') {
      code.classes.add('input-success');
    } else {
      code.classes.remove('input-success');
    }
  });
  domain.onChange.listen((_) {
    getStrings['domain'] = domain.value.toString().toLowerCase();
    if (name.value!.isNotEmpty || name.value.toString() != '') {
      domain.classes.add('input-success');
    } else {
      domain.classes.remove('input-success');
    }
  });
  btn.onClick.listen((_) {
    btn.text = passwordGenerator(getStrings);
    name.value = null;
    code.value = null;
    domain.value = null;
    copyPass(btn.text);
    // snackbar.className = 'show';
    // Future.delayed(const Duration(milliseconds: 3000), () {
    //   snackbar.className = '';
    // });
  });
}

void copyPass(var pass) {
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

String passwordGenerator(Map strings) {
  var symbols = '!#\$%&()*<=>?@[]^_{}~';
  var name = strings['name'] ?? 'tria';
  var code = strings['code'] ?? 'tria';
  var domain = strings['domain'] ?? 'tria';
  var bytes = utf8.encode("$name$domain");
  var hmac256 = Hmac(sha256, utf8.encode(code));
  var digest = hmac256.convert(bytes).toString();
  var password = '';
  for (var i = 0; i < 5; i++) {
    password += symbols[(bytes[0] + bytes[1]) % (symbols.length - i)];
  }
  password = digest.substring(0, 3) +
      password[0] +
      digest.substring(3, 6).toUpperCase() +
      password[1] +
      digest.substring(6, 9) +
      password[2] +
      digest.substring(9, 12).toUpperCase() +
      password[3];

  return password;
}
