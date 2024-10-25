document.addEventListener('DOMContentLoaded', function () {
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', function () {
            // Hide all payment method sections first
            document.querySelectorAll('.payment-method').forEach(section => {
                section.style.display = 'none';
                section.querySelectorAll('input,select,textarea').forEach(input=>{
                    input.disabled=true;
                });
            });
            // Show the selected payment method section
            const selectedMethod = this.value;
            const selectedMethodDiv = document.getElementById(selectedMethod + '-method');
            if (selectedMethodDiv) {
                selectedMethodDiv.style.display = 'block';
                selectedMethodDiv.querySelectorAll('input,select,textarea').forEach(input=>{
                    input.disabled=false;
                });
            }
        });
    });

  // Show/hide card based on selection
  document.getElementById('card').addEventListener('change', function () {
    document.querySelectorAll('.cards').forEach(function (card) {
        card.style.display = 'none'; // Hide all payment methods
    });
    const selectedCard = this.value;
    if (selectedCard) {
        document.getElementById(selectedCard).style.display = 'block'; // Show selected payment method
    }
});
// card number rt
function formatCardNumber(number){
    return number.replace(/\W/gi, '');
}
document.getElementById('inputcardNumber').addEventListener('input',function(){
    const cardNumber=this.value.replace(/\D/g, '');
    const formattedCardNumber = formatCardNumber(cardNumber);
    document.getElementById('cardNum').textContent=formattedCardNumber || 'XXXX XXXX XXXX XXXX';
});    

// vscard input
const vscardNumberInput=document.getElementById('inputcardNumber');
const vscardNumDisplay=document.getElementById('vscardNum');
const vscvvInput=document.getElementById('inputCVV');
const vscvvDisplay=document.getElementById('vscardCVV');
let vscvvTimeout;

vscardNumberInput.addEventListener('input', function(){
let value=this.value.replace(/[^\d\*]/g, '');
value=value.substring(0,16);

if(value.length>=4){
    this.value=value.replace(/(\d{4})(\d{8})(\d{4})/,'$1 **** **** $3');
    vscardNumDisplay.textContent=this.value;
}else{
    this.value=value;
}  
});
// vscvvdisplay
vscvvInput.addEventListener('input', function(){
    vscvvDisplay.textContent = this.value;
    vscvvTimeout=setTimeout(()=>{
        vscvvDisplay.textContent='****';
    },1000);
});
//    vscard exp 
const vsexpMon=document.getElementById('expiryMonth');
const vsexpYr=document.getElementById('expiryYear');
const vsexpInp=document.getElementById('vsexpiry');

function vsExpDate(){
    const vsmon=vsexpMon.value.padStart(2,'0');
    const vsyear = vsexpYr.value.slice(2);
    if(vsmon && vsyear){
        vsexpInp.value=`${vsmon}/${vsyear}`;
    }
}

vsexpMon.addEventListener('change',vsExpDate);
vsexpYr.addEventListener('change',vsExpDate);

// amexcard input
const amcardNumberInput=document.getElementById('inputcardNumber');
const amcardNumDisplay=document.getElementById('amcardNum');
const amcvvInput=document.getElementById('inputCVV');
const amcvvDisplay=document.getElementById('amcardCVV');
let amcvvTimeout;

amcardNumberInput.addEventListener('input', function(){
let value=this.value.replace(/[^\d\*]/g, '');
value=value.substring(0,16);

if(value.length>=4){
    this.value=value.replace(/(\d{4})(\d{8})(\d{4})/,'$1 **** **** $3');
    amcardNumDisplay.textContent=this.value;
}else{
    this.value=value;
}  
});

// amexcvvdisplay
amcvvInput.addEventListener('input', function(){
    amcvvDisplay.textContent = this.value;
    amcvvTimeout=setTimeout(()=>{
        amcvvDisplay.textContent='****';
    },1000);
});
//    amexcard exp 
const amexpMon=document.getElementById('expiryMonth');
const amexpYr=document.getElementById('expiryYear');
const amexpInp=document.getElementById('amexpiry');

function amExpDate(){
    const ammon=amexpMon.value.padStart(2,'0');
    const amyear = amexpYr.value.slice(2);
    if(ammon && amyear){
        amexpInp.value=`${ammon}/${amyear}`;
    }
}

amexpMon.addEventListener('change',amExpDate);
amexpYr.addEventListener('change',amExpDate);


// uPaycard input
const upcardNumberInput=document.getElementById('inputcardNumber');
const upcardNumDisplay=document.getElementById('upcardNum');
const upcvvInput=document.getElementById('inputCVV');
const upcvvDisplay=document.getElementById('upcardCVV');
let upcvvTimeout;

upcardNumberInput.addEventListener('input', function(){
let value=this.value.replace(/[^\d\*]/g, '');
value=value.substring(0,16);

if(value.length>=4){
    this.value=value.replace(/(\d{4})(\d{8})(\d{4})/,'$1 **** **** $3');
    upcardNumDisplay.textContent=this.value;
}else{
    this.value=value;
}  
});

// Upaycvvdisplay
upcvvInput.addEventListener('input', function(){
    upcvvDisplay.textContent = this.value;
    upcvvTimeout=setTimeout(()=>{
        upcvvDisplay.textContent='****';
    },1000);
});
//    Upaycard exp 
const upexpMon=document.getElementById('expiryMonth');
const upexpYr=document.getElementById('expiryYear');
const upexpInp=document.getElementById('upexpiry');

function upExpDate(){
    const upmon=upexpMon.value.padStart(2,'0');
    const upyear = upexpYr.value.slice(2);
    if(upmon && upyear){
        upexpInp.value=`${upmon}/${upyear}`;
    }
}

upexpMon.addEventListener('change',upExpDate);
upexpYr.addEventListener('change',upExpDate);


// mastercard input
    const cardNumberInput=document.getElementById('inputcardNumber');
const cardNumDisplay=document.getElementById('cardNum');
const cvvInput=document.getElementById('inputCVV');
const cvvDisplay=document.getElementById('cardCVV');
let cvvTimeout;

cardNumberInput.addEventListener('input', function(){
let value=this.value.replace(/[^\d\*]/g, '');
value=value.substring(0,16);

if(value.length>=4){
    this.value=value.replace(/(\d{4})(\d{8})(\d{4})/,'$1 **** **** $3');
    cardNumDisplay.textContent=this.value;
}else{
    this.value=value;
}  
});
// master cvvdisplay
cvvInput.addEventListener('input', function(){
    cvvDisplay.textContent = this.value;
    cvvTimeout=setTimeout(()=>{
        cvvDisplay.textContent='****';
    },1000);
});

//    master card exp 
const expMon=document.getElementById('expiryMonth');
const expYr=document.getElementById('expiryYear');
const expInp=document.getElementById('expiry');

function ExpDate(){
    const mon=expMon.value.padStart(2,'0');
    const year = expYr.value.slice(2);
    if(mon && year){
        expInp.value=`${mon}/${year}`;
    }
}

expMon.addEventListener('change',ExpDate);
expYr.addEventListener('change',ExpDate);



});

document.addEventListener('DOMContentLoaded', function () {
    const allInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    allInputs.forEach(input => {
        const errorSpan = input.nextElementSibling;
        input.addEventListener('input', function() {
            validateImmediate(this, errorSpan);
        });
    });

const billingFields = {
    name: document.getElementById('billName'),
    surname: document.getElementById('billSurname'),
    mname: document.getElementById('billMname'),
    address: document.getElementById('billAdd'),
    country: document.getElementById('billCountry'),
    city: document.getElementById('billCity'),
    zip: document.getElementById('billZip'),
    contact: document.getElementById('billContact')
};

const shippingFields = {
    name: document.getElementById('shipName'),
    surname: document.getElementById('shipSurname'),
    mname: document.getElementById('shipMname'),
    address: document.getElementById('shipAdd'),
    country: document.getElementById('shipCountry'),
    city: document.getElementById('shipCity'),
    zip: document.getElementById('shipZip'),
    contact: document.getElementById('shipContact')
};

// Function to copy billing fields to shipping fields
function copyBillingToShipping() {
    if (sameAddressCheck.checked) {
        for (const key in billingFields) {
            shippingFields[key].value = billingFields[key].value;
        }
    }
}


// Event listener for the checkbox to enable/disable real-time copying
sameAddressCheck.addEventListener('change', function () {
    if (this.checked) {
        copyBillingToShipping();
        
        for (const key in billingFields) {
            billingFields[key].addEventListener('input', copyBillingToShipping);
            shippingFields[key].disabled = true; 
        }
    } else {
        for (const key in billingFields) {
            billingFields[key].removeEventListener('input', copyBillingToShipping);
            shippingFields[key].disabled = false; 
            shippingFields[key].value = ''; 
        }
    }
});

if (sameAddressCheck.checked) {
    copyBillingToShipping();
}

function validateImmediate(input, errorElement) {
    if (!input.value.trim()) {
        errorElement.textContent = "This field cannot be empty or contain only spaces.";
        input.classList.add('is-invalid');
        return false;
    } else {
        errorElement.textContent = "";
        input.classList.remove('is-invalid');
        return true;
    }
}

function validateFields(fields) {
    const namePattern = /^[^\s].*[^\s]$/;
    const zipPattern = /^\d{4}$/;
    const contactPattern = /^09[0-9]{9}$/;

    if (!namePattern.test(fields.name.value)) {
        alert("Name cannot be empty or contain leading/trailing spaces.");
        fields.name.focus();
        return false;
    }
    if (fields.mname.value && /^\s/.test(fields.mname.value)) {
        alert("Middle name cannot start with a space.");
        fields.mname.focus();
        return false;
    }
    if (fields.address.value.trim() === "") {
        alert("Address cannot be empty.");
        fields.address.focus();
        return false;
    }
    if (fields.country.value.trim() === "") {
        alert("Country cannot be empty.");
        fields.country.focus();
        return false;
    }
    if (fields.city.value.trim() === "") {
        alert("City cannot be empty.");
        fields.city.focus();
        return false;
    }
    if (!zipPattern.test(fields.zip.value)) {
        alert("ZIP code must be valid (e.g., 1234).");
        fields.zip.focus();
        return false;
    }
    if (!contactPattern.test(fields.contact.value)) {
        alert("Contact number must be between 10 and 15 digits.");
        fields.contact.focus();
        return false;
    }
    return true;
}

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate billing and shipping fields
    const isBillingValid = validateFields(billingFields);
    const isShippingValid = validateFields(shippingFields);

    if (isBillingValid && isShippingValid) {
        const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        modal.show();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const allInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    allInputs.forEach(input => {
        const errorSpan = input.nextElementSibling;
        input.addEventListener('input', function() {
            validateImmediate(this, errorSpan);
        });
    });

    Object.values(billingFields).forEach(input => {
        input.addEventListener('input', function() {
            validateImmediate(this, input.nextElementSibling);
        });
    });

    Object.values(shippingFields).forEach(input => {
        input.addEventListener('input', function() {
            validateImmediate(this, input.nextElementSibling);
        });
    });
});

});
// Call the function when the modal is triggered
document.getElementById('checkoutBtn').addEventListener('click', function() {
        window.location.href = 'typ2.html'; 
    });
