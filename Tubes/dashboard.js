function switchPage(p){
	switch(p){
		case "aset":
			document.getElementById("main-content").innerHTML='<object type="text/html" width="100%" height="100%" data="TarikTB.html" ></object>';
		break;
		case "help":
			document.getElementById("main-content").innerHTML='<object type="text/html" width="100%" height="100%" data="help.html" ></object>';
		break;
		case "withdraw":
			document.getElementById("main-content").innerHTML='<object type="text/html" width="100%" height="100%" data="Atur.html" ></object>';
		break;
		default:
			document.getElementById("main-content").innerHTML='<object type="text/html" width="100%" height="100%" data="home.html" ></object>';
		break;
		
	}
}