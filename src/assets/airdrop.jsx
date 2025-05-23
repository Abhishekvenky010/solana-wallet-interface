import { ConnectionProvider, WalletProvider, useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        let amount = parseFloat(document.getElementById("amount").value); // Convert to number
        if (!wallet.publicKey) {
            alert("Please connect a wallet first!");
            return;
        }
        if (isNaN(amount) || amount <= 0) {
            alert("Enter a valid amount of SOL.");
            return;
        }
        try {
            const tx = await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
            alert(`Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
        } catch (error) {
            alert("Airdrop failed: " + error.message);
        }
    }

    return (
        <div>
            <br/><br/>
            <input id="amount" type="text" placeholder="Amount" />
            <button onClick={requestAirdrop}>Request Airdrop</button>
        </div>
    );
}
