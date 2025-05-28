for (var num=9; num>0; num--) {
	var elm = document.createElement("button");
	elm.innerHTML = num;
	elm.setAttribute("id", num); 
	elm.setAttribute("class", "circle"); 
	var function_name = "remove(" + num + ")"
    elm.setAttribute("onclick", function_name); 
	document.getElementById("main").appendChild(elm);

	// ランダムな位置
	var left_pos = 10 + Math.floor(Math.random() * 400);
	var top_pos = 100 + Math.floor(Math.random() * 600);
	document.getElementById(num).style.left = left_pos + "px";
	document.getElementById(num).style.top = top_pos + "px";

	// ランダムな大きさ
	var size = 40 + Math.floor(Math.random() * 61); // 40~100px
	document.getElementById(num).style.width = size + "px";
	document.getElementById(num).style.height = size + "px";
	document.getElementById(num).style.fontSize = (size * 0.5) + "px";

	// ランダムな色
	var color = `hsl(${Math.floor(Math.random()*360)},80%,60%)`;
	document.getElementById(num).style.background = color;
}

var next = 1;
document.remove = function(id) {
    if(id === next){
        document.getElementById("main").removeChild(document.getElementById(id));
        next = next + 1;
        // 全て消したら「終了！」表示
        if(next > 9){
            var endMsg = document.createElement("div");
            endMsg.textContent = "終了！";
            endMsg.style.fontSize = "48px";
            endMsg.style.color = "blue";
            endMsg.style.textAlign = "center";
            document.getElementById("main").appendChild(endMsg);
        }
    }
}