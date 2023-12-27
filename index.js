// Create global userWalletAddress variable
window.userWalletAddress = null;

//================================
// when the browser is ready
//================================
window.onload = async (event) => {
	// contract address
    Xmas_address = "0x7784c45Ec594575256095C8Bb6d3c4E8C831a107";
	// abi
    Xmas_abi = [
        {"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
        {"constant":false,"inputs":[{"name":"_spender","type":"address"},
    	{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    	{"constant":true,"inputs":[],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},
    	{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"lotoSetting","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"lotoRandomNo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"lotoPool","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"lotoWinner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"lotoCountDown","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"lotoRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    	{"constant":true,"inputs":[],"name":"lotoAdds","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    	{"constant":true,"inputs":[],"name":"lotoPlayerNo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    	{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},
    	{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},
    	{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},
    	{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}
    ];    
    
	// create contract instance
    contract = new web3.eth.Contract(Xmas_abi, Xmas_address);
	
    // show the user dashboard
    showUserDashboard();
};

//================================
// function to show dashboard
//================================
const showUserDashboard = async () => {
    get_totalSupply();
    get_liquidity();
    get_lotoPool();
    get_lotoPlayer();
    get_lotoWinner();
};

// get total supply
const get_totalSupply = async () => {
	Xmas_totalSupply = await contract.methods.totalSupply().call();
	Xmas_totalSupply -= Xmas_totalSupply % 100000000;
	Xmas_totalSupply = Xmas_totalSupply / 100000000;
    Xmas_totalSupply = Number(Xmas_totalSupply).toString();
    document.querySelector(".total-supply").innerHTML = Xmas_totalSupply;
}

// get liquidity
const get_liquidity = async () => {
	Xmas_liquidityAddress = "0x7f7b61f9Da2E76938c145bE78AB4509BfeE02C8E";
	Xmas_liquidity = await contract.methods.balanceOf(Xmas_liquidityAddress).call();
	Xmas_liquidity -= Xmas_liquidity % 100000000;
	Xmas_liquidity = Xmas_liquidity / 100000000;
    Xmas_liquidity = Number(Xmas_liquidity).toString();
    document.querySelector(".liquidity").innerHTML = Xmas_liquidity;
}

// get loto pool
const get_lotoPool = async () => {
	Xmas_poolAddress = "0x467c1D872B7e7cc68121324479f3691bD3052ba8";
	Xmas_lotoPool = await contract.methods.balanceOf(Xmas_poolAddress).call();
	Xmas_lotoPool -= Xmas_lotoPool % 100000000;
	Xmas_lotoPool = Xmas_lotoPool / 100000000;
    Xmas_lotoPool = Number(Xmas_lotoPool).toString();
    document.querySelector(".loto-pool").innerHTML = Xmas_lotoPool;
}

// get loto player
const get_lotoPlayer = async () => {
	Xmas_lotoPlayer = await contract.methods.lotoPlayerNo().call();
    Xmas_lotoPlayer = Number(Xmas_lotoPlayer).toString();
    document.querySelector(".loto-player").innerHTML = Xmas_lotoPlayer;
}

// get loto winner
const get_lotoWinner = async () => {
	Xmas_Address0 = "0x0000000000000000000000000000000000000000";
	Xmas_lotoWinner = await contract.methods.lotoWinner().call();
	if (Xmas_lotoWinner == Xmas_Address0) {
	    document.querySelector(".loto-winner").innerHTML = Xmas_lotoWinner;
	}
	else {
        document.querySelector(".loto-winner").innerHTML = Xmas_lotoWinner;
    }
}
