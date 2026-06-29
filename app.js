const app = {
  chainId: 1,
  usdc: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",

  async connect() {
    if (!window.ethereum) {
      alert("Please open this in a wallet browser like Rabby.");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    return accounts[0];
  }
};
