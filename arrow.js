var cleanPhoneNumber = phone => phone.replace(/-/g, '') 

var anythingToLowerCase = anything => {
  if (!anything) {
    return ''
  }

  return String(anything).toLowerCase()
}
