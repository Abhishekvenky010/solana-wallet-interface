import React, { useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './assets/airdrop';
import { ShowBalance } from './assets/showBalance';
import { SendToken } from './assets/SendToken';
import { SignMessage } from './assets/SignMessage';



function App() {
    const endpoint = "https://solana-devnet.g.alchemy.com/v2/FQHmKHAxCcEgQOwt3dAwCYdNxKGlWY4q"; 
    const [selectedComponent, setSelectedComponent] = useState(null);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <h1>Solana Wallet Interface</h1>
                        <WalletMultiButton />
                        
                        {/* Navigation */}
                        <div style={{ marginTop: '20px' }}>
                            <button onClick={() => setSelectedComponent('Airdrop')}>Airdrop SOL</button>
                            <button onClick={() => setSelectedComponent('ShowBalance')}>Check Balance</button>
                            <button onClick={() => setSelectedComponent('SendToken')}>Send Token</button>
                            <button onClick={() => setSelectedComponent('SignMessage')}>Sign Message</button>
                        </div>

                        {/* Dynamically Render Components */}
                        <div style={{ marginTop: '20px' }}>
                            {selectedComponent === 'Airdrop' && <Airdrop />}
                            {selectedComponent === 'ShowBalance' && <ShowBalance />}
                            {selectedComponent === 'SendToken' && <SendToken />}
                            {selectedComponent === 'SignMessage' && <SignMessage />}
                        </div>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
