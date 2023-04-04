﻿function a_init() {
	updateShare(0);
}

function goHome() {
	window.location.href ='https://aaoe.github.io/;
}

function a_submitScore(score) {
	updateShareScore(score);
	//setTimeout( function() { show_share(); }, 1000 )
}

function updateShare(bestScore) {
	imgUrl = 'https://aaoe.github.io/games/img/Logo.png
	lineLink = 'https://aaoe.github.io/;
	descContent = "各位选手快来争夺拳王宝座吧！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "我在《3D拳王》挑战得了" + bestScore + "分，你打得过我吗？";
	}
	else{
		shareTitle = "真3D！《3D拳王》冠军争霸已经开始！";
	}
}