function label(tag,attr,attrval,content) {
var labelElement = document.createElement(tag);
labelElement.setAttribute(attr,attrval);
labelElement.innerHTML = content;
return labelElement;
}

function lnbreak(tag){
var br = document.createElement(tag);
return br;
}

function input(tag,attr1,attrval1,attr2,attrval2,attr3,attrval3,content){
var inputElement = document.createElement(tag);
inputElement.setAttribute(attr1,attrval1);
inputElement.setAttribute(attr2,attrval2);
inputElement.setAttribute(attr3,attrval3);
inputElement.value = content;
return inputElement;
}

var fnameLabel = label("label","for","fname","First Name")
document.body.append(fnameLabel)
var fnameInput = input("input","type","text","id","fname","style","margin-left:10px","John")
document.body.append(fnameInput)
document.body.append(lnbreak("br"))
var mnameLabel = label("label","for","mname","Middle Name")
document.body.append(mnameLabel)
var mnameInput = input("input","type","text","id","mname","style","margin-left:10px","Doe")
document.body.append(mnameInput)
document.body.append(lnbreak("br"))
var lnameLable = label("label","for","lname","Last Name")
document.body.append(lnameLable)
var lnameInput = input("input","type","text","id","lname","style","margin-left:10px","Smith")
document.body.append(lnameInput)
document.body.append(lnbreak("br"))
var emailLabel = label("label","for","email","Email")
document.body.append(emailLabel)
var emailInput = input("input","type","email","id","email","style","margin-left:10px","johndoe@gmail.com")
document.body.append(emailInput)
document.body.append(lnbreak("br"))
var pwdLabel = label("label","for","password","Password")
document.body.append(pwdLabel)
var emailInput = input("input","type","password","id","password","style","margin-left:10px","Abc@1234")
document.body.append(emailInput)
document.body.append(lnbreak("br"))


