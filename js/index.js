//console.log(section_list)
let result = []

let get_select_data = (index) => {
	let select_list = document.getElementsByName(`select${index}`);
	for (let i = 0; i < select_list.length; i++) {
		if(select_list[i].checked)
			result.push(parseInt(select_list[i].value));
	}
}

let next = (index) => {
	let section_list = document.querySelectorAll('.section');
	section_list[index].classList.add('hide');
	section_list[index + 1].classList.remove('hide');
	if (index >= 1)
		get_select_data(index);
}

let get_result = (result) => {
	let score = result.reduce((a,b)=>(a+b));
	let result_list = document.querySelectorAll('.result');
	console.log(result);
	console.log(score);
	if (score <= 8)
		result_list[0].classList.remove('hide');
	else if (score <= 12)
		result_list[1].classList.remove('hide');
	else
		result_list[2].classList.remove('hide');
}

let next_btn_list = document.querySelectorAll('.next_btn');
next_btn_list.forEach((value, index)=>{
	value.addEventListener('click', ()=>{
		next(index);
		if (index == next_btn_list.length - 1)
			get_result(result);
	});
})

window.onload = () => {

var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
		alert("다른 브라우저를 이용해주세요 제발 ㅠ \n   - 불쌍한 개발자 klim 의 간곡한 부탁");
	}
}
