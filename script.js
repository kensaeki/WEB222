const hiring = document.querySelector('#hiring');
const question = document.querySelector('#question');
const comment = document.querySelector('#comment');
const subject = document.querySelector('#subject');
let rateLabel, rate;
let rateRemoved = true;

hiring.addEventListener('click', function (){
    if(rateRemoved){
        rateLabel = document.createElement('label');
        rate = document.createElement('input');

        rateLabel.for = 'rate';
        rateLabel.innerHTML= 'Hourly Rate';
        
        rate.id = 'rate';
        rate.name = 'rate';
        rate.type = 'text';
        rate.title = 'Enter hourly rate';
        rate.placeholder = 'Hourly Rate';
        rate.pattern = '^\\$?\\d+(\\.\\d{2})?$';
        rate.setAttribute('required', '');

        subject.appendChild(rateLabel);
        subject.appendChild(rate);
        rateRemoved = false;
    }
});

question.addEventListener('click', removeRate);
comment.addEventListener('click', removeRate);

function removeRate() {
    if(!rateRemoved){
        subject.removeChild(rateLabel);
        subject.removeChild(rate);
        rateRemoved = true;
    }
}