import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendToken(){
    const wallet = useWallet();
    const {connection} = useConnection();
    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey : wallet.publicKey,
            toPubkey : new PublicKey(to),
            lamports : amount * LAMPORTS_PER_SOL,
        }));
        await wallet.sendTransaction(transaction,connection)
        alert("send" + amount + "sol to" + to)
    }
    return <div>
        <input id = "to" type="text" placeholder="TO"></input>
        <input id = "amount" type = "text" placeholder="Amount"></input>
        <button onClick={sendTokens}>SEND</button>
    </div>

}