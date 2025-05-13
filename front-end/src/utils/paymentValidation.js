export default function paymentValidation(formData) {

    const currentDate = new Date();
    const currentDateYear = currentDate.getFullYear();
    

    if (!formData.cardNumber) {
      return "Card number must be provided";
    }

    if (!formData.cardHolder) {
      return "Card holder name must be provided";
    }

    if (!formData.expMonth) {
      return "Month of expiration must be provided";
    }

    if (!formData.expYear) {
        return "Year of expiration must be provided";
    }

    if (!formData.CVV) {
        return "CVV must be provided";
      }

    if (formData.expMonth < 1 || formData.expMonth > 12) {
      return "Invalid expiration month";
    }

    if (formData.expYear > 2050) {
        return "Invalid year"
    }

    if (formData.expYear < currentDateYear) {
        console.log(formData.expYear);
        console.log(currentDateYear);
      return "Card expired";
    }

    if (formData.CVV.length < 3 || formData.CVV.length >3 ) {
        return "invalid CVV";
    }

    if (formData.cardNumber.length < 8 || formData.cardNumber.length > 19) {
        return "invalid card number";
    }

    return undefined;
}
