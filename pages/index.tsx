import { ConnectEmbed, ConnectWallet, darkTheme,  useShowConnectEmbed, } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Connectedpage from "./components/Connected";

const customtheme = darkTheme({ 
  colors: {
    accentText: "#8aaa8a",
    accentButtonBg: "#336c33",
    modalBg: "#b99309",
     
    separatorLine: "#1c2a63",

  }

})

const Home: NextPage = () => {
  const showConnectEmbed = useShowConnectEmbed();
  return (
    
      <div className={styles.container}>
        {showConnectEmbed ? (

       <div style ={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
       }}>
        <div style= {{
          width: '50%',
          height: '100vh',
          backgroundColor: '#336c33',

        }}>
        </div>
        <div  style={{
          width: '50%',
          height: '100vh',
          backgroundColor: '#e6ede6',
          display:'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h1 style={{color:'#336c33'}} >Login to start</h1>

          <ConnectEmbed
          theme={customtheme}
          style={{
            border: 'none',
            backgroundColor: '#08090a',            

          }}
          />
          


        </div>
      

       </div>

        ) : (
          <div>
            <Connectedpage/>
            </div>

        )}
        
       </div>
    
  );
};

export default Home;
