const USDC_CONTRACT = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const TO_ADDRESS = "0x0226b1a55997ae7daff5562c2047392ca7083a13";
const AMOUNT_USDC = "2.5";

const app = {
  async connect() {
    if (!window.ethereum) {
      alert("Open this page inside Rabby browser.");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    alert("Connected: " + accounts[0]);
    return accounts[0];
  },

  async sendUSDC() {
    const from = await this.connect();
    if (!from) return;

    const amount = BigInt(Math.round(Number(AMOUNT_USDC) * 1_000_000));
    const amountHex = "0x" + amount.toString(16);

    const data =
      "0xa9059cbb" +
      TO_ADDRESS.toLowerCase().replace("0x", "").padStart(64, "0") +
      amount.toString(16).padStart(64, "0");

    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [{
        from,
        to: USDC_CONTRACT,
        value: "0x0",
        data
      }]
    });
  }
};

window.app = app;
