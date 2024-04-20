import { ConnectWallet, useDisconnect } from "@thirdweb-dev/react";

const Connectedpage = () => {

    const disconnect = useDisconnect();
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem'
            }}>
                <h3>profitpeak</h3>
                <ConnectWallet />
                {/*<button
                onClick={() => {
                    disconnect();
                }}
            >log out</button>*/}



            </div>
        </div>
    )
};

export default Connectedpage;