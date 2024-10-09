import {useMemo, useState} from 'react'
import {
    WalletModalProvider,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {clusterApiUrl} from "@solana/web3.js";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import Home from "./views/Home.jsx";
import {Select, Space} from "antd";
import { Container, Row, Col} from 'react-bootstrap';
import('@solana/wallet-adapter-react-ui/styles.css');
import { Toaster } from 'react-hot-toast';
import styled from "styled-components";
import GlobalStyle from "./utils/GlobalStyle";
import HeaderTop from "./headTop.jsx";
import FooterBox from "./footerBox.jsx";
import Logo from "./assets/logo.png";

const Box = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Header = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`


const MainContent = styled(Container)`
    flex-grow: 1;
    margin: 40px auto;
    
`

const Lft = styled(Col)`
    display: flex;
  align-items: center;
  margin-left: -12px;
  .imgBox{
    width: 96px;
    height: 96px;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #EDEFF0;
    margin-right: 16px;
    box-sizing: border-box;
      overflow: hidden;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
`

const TitleBox = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  .tit{
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
  }
`


const DEFAULT_NETWORK = WalletAdapterNetwork.Mainnet;

function App() {

    const [network, setNetwork] = useState(DEFAULT_NETWORK)
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);


    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    const handleChange = (e) => {
        setNetwork(e)
    }


  return (
          <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                  <WalletModalProvider>
                      <Box>
                          <HeaderTop />
                          <Header>
                              <Lft  md={6} xs={12}>
                                  <div className="imgBox"><img src={Logo} alt=""/></div>
                                  <TitleBox>
                                      <div className="tit">Solana NFT</div>
                                      <div>create Solana NFT</div>
                                  </TitleBox>
                              </Lft>
                              <div>
                                  <Select
                                      defaultValue={network}
                                      value={network}
                                      style={{ width: 120,height:50,marginRight:20 }}
                                      onChange={handleChange}
                                      options={[
                                          { value: WalletAdapterNetwork.Mainnet, label: 'Mainnet' },
                                          { value: WalletAdapterNetwork.Devnet, label: 'Devnet' },
                                          { value: WalletAdapterNetwork.Testnet, label: 'Testnet' },
                                      ]}
                                  />
                                  <WalletMultiButton className="btnRht" />
                              </div>

                          </Header>
                          <MainContent>
                              <Home cluster={network}/>
                          </MainContent>

                          <Toaster/>
                          <FooterBox />
                      </Box>

                  </WalletModalProvider>
              </WalletProvider>
              <GlobalStyle />
          </ConnectionProvider>
  )
}

export default App
