// Chat GPT
function removePhoneFormat(phoneNumber: string): string {
	// Use a regular expression to remove non-numeric characters
	return phoneNumber.replace(/[^0-9]/g, '');
 }