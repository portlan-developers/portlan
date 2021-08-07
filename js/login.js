const inputs  = document.querySelectorAll('.input-check');
const alertTooltip = document.querySelectorAll('.form__tooltip-alert');
const form = document.querySelector('.contact__form');
const formTooltip = document.querySelectorAll('.form__tooltip');
form.addEventListener('submit', checkvalid)
function checkvalid(e) {
    e.preventDefault();

	inputs.forEach((index, d) => {
		if (!index.value) {
			formTooltip[d].classList.add('invalid');

		}else if (inputs[d].value.length <= 6) {
			alertTooltip[d].classList.add('invalid');
            
        }else{
			formTooltip[d].classList.remove('invalid');
            alertTooltip[d].classList.remove('invalid');
            form.removeEventListener('click', checkvalid)
		}
	});
}
