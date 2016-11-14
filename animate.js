(function () {
	window.onload=function () {
		var textInput=document.getElementById('textInput');
		textInput.addEventListener('focus',function () {
			this.className='longer';
		})
		textInput.addEventListener('blur',function () {
			this.className='';
		})
	}
})();