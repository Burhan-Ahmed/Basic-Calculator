var line = '';
var num = document.querySelectorAll(".number");
Array.from(num).forEach((index)=>{
	index.addEventListener('click', (cc) => {
		if (cc.target.innerHTML == '=') {
			line = eval(line);
			document.querySelector(".result").value = line;
		}
		else if (cc.target.innerHTML=='C')
		{
			line = ""
			document.querySelector('.result').value = line;
		}
		else {
//			console.log(cc.target);
			line = line + cc.target.innerHTML;
			document.querySelector(".result").value = line;
		}
	})
})