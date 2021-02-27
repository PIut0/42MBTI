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
	console.log(result);
}

let next_btn_list = document.querySelectorAll('.next_btn');
next_btn_list.forEach((value, index)=>{
	value.addEventListener('click', ()=>{
		next(index);
		if (index == next_btn_list.length - 1)
			get_result(result);
	});
})
