fetch('https://open.er-api.com/v6/latest/USD')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let a;
for(let n in data.rates) {
  $('#sel1').append(`<option value="${data.rates[n]}">${n}</option>`);
  $('#sel2').append(`<option value="${data.rates[n]}">${n}</option>`);
};
$('.clear').click(function(){
  sum.value = '';
  res.innerText = '0.00'
});
sum.oninput = function() {
  a = sum.value;
  res.innerText = ((sel2.value / sel1.value)*a).toFixed(2);
};
});
 



