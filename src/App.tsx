import React, { useEffect, useState } from 'react';
import './App.css';
import BrandLines from "./components/BrandLines";
import Header from "./components/Header";
import SectionCard from "./components/SectionCard";

// ───────────────────────────────────────────────────────────
//  Below, for each “section,” we supply:
//    • title: the card header (“Validators”, “Providers”, etc.)
//    • logos: array of filenames in /public/assets/logos/
//      (e.g. "validators-1.png", "validators-2.svg", etc.)
// ───────────────────────────────────────────────────────────
const SECTIONS: {
  title: string;
  logos: string[];
}[] = [
  {
    title: "Wallets",
    logos: [
      "metamask.png",
      "keplr.png",
      "xrplmetamasksnap.png",
      "crossmark.png",
      "leap.png",
      "cosmostationwallet.png",
      "palmerafinance.png",
    ],
  },
  {
    title: "Bridges",
    logos: [
      "axelar.png",
      "ibc.png",
      "squid.png",
      "skip.png",
    ],
  },
  {
    title: "dApps",
    logos: [
      "moai.png",
      "elys-logo-white-medium-size 1.png",
      "easya.png",
      "riddle.png",
      "xrise33.png",
      "hammyfinance.png",
      "nexusdao.png",
      "fomobiz.png",
      "xrplnames.png",
      "onchaingm.png",
      "skuuy.png",
      "walkit.png",
      "nexusdapp.png",
      "moremarkets.png",
      "injective.png",
      "securd.png",
      "strobe.png",
      "vertex.png",
      "purplemarkets.png",
      "zns.png",
      "mars.png",
      "gas.zip.png",
      "nfts2me.png",
      "xaodao.jpg",
      "capsign.png",
    ],
  },
  {
    title: "Oracles",
    logos: ["bandprotocol.png"],
  },
  {
    title: "Indexers",
    logos: ["goldsky.png"],
  },
  {
    title: "Explorers",
    logos: [
      "blockscout.png",
      "forbole_bigd 1.png",
      "axelarscan.png",
      "exploreme.png",
      "range.png",
      "bonynode.png",
      "corenode.png",
      "nodeshubexplorer.png",
      "kgnodes.png",
      "lesnik utsa.png",
      "luckystar.png",
      "mekonglabs.png",
      "mictonode.png",
      "monkeylabs.png",
      "node9x.png",
      "nodestake.png",
      "rpcdot.png",
      "stavr.png",
    ],
  },
  {
    title: "Validators",
    logos: [
      "peersyst.png",
      "ripple.png",
      "informalsystems.png",
      "interchainlabs.png",
      "xrplcommons.png",
      "kintsugi.png",
      "keplr.png",
      "blockscout.png",
      "grove.png",
      "moai.png",
      "bkgeomatics.png",
      "sbi.png",
      "enigma.png",
      "flowdesk.png",
      "polkachu.png",
      "purplemarkets.png",
      "sg1.png",
      "nexus.png",
      "cumulo.png",
      "imperator.png",
      "kingnodes.png",
      "linkpool.png",
      "rhino.png",
      "cosmostation.png",
      "cryptosurvivor.png",
      "xtoadz.png"
    ],
  },
  {
    title: "Core",
    logos: [
      "peersyst.png",
      "ripple.png",
      "cosmos.png",
      "axelar.png",
      "commonprefix.png",
      "xrplcommons.png",
    ],
  },
  {
    title: "Auditors",
    logos: [
      "bishopfox.png",
      "certik.png",
      "fyeo.png",
      "informalsystems.png",
      "nccgroup1.png",
      "nccgroup2.png",
      "nccgroup3.png",
    ],
  },
  {
    title: "Providers",
    logos: [
      "grove.png",
      "polkachu.png",
      "enigma.png",
      "cumulo.png",
      "imperator.png",
      "itrocket.png",
      "blockitize.png",
      "cosmostation.png",
      "endorphinestake.png",
      "unitynodes.png",
      "nodeshubprovider.png",
      "noders.png",
      "bonynode.png",
      "brightlystake.png",
      "corenode.png",
      "cosmonaut.png",
      "dongqn.png",
      "kgnodes.png",
      "lesnik utsa.png",
      "mekonglabs.png",
      "mictonode.png",
      "monkeylabs.png",
      "node9x.png",
      "nodestake.png",
      "rpcdot.png",
      "stavr.png",
    ],
  },
];

function App() {
  const [showFooter, setShowFooter] = useState(true);

  // Track if user is scrolling
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      setShowFooter(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowFooter(true);
      }, 500); // Show footer 500ms after scroll stops
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      {/* Two diagonal neon brand‐lines (one purple on left, one green on right) */}
      <BrandLines />

      {/* The grid that holds the header and all of the “cards” */}
      <div className="cards-layout">
        {/* Header: XRPL EVM SIDECHAIN logo on top + “ECOSYSTEM” SVG below it, as part of the grid */}
        <div className="header-grid-item">
          <Header />
        </div>
        {SECTIONS.map((sec) => (
          <SectionCard key={sec.title} title={sec.title} logos={sec.logos} />
        ))}
      </div>
      <footer className={`app-footer${showFooter ? ' visible' : ' hidden'}`}>
        <div className="app-footer-content">
          <div>
            <a href="https://airtable.com/appDFL9N9MDWj0Ywd/shrl5nsqAhtghUN8I" target="_blank" rel="noopener noreferrer">Submit your project!</a>
          </div>
          <div>
            Follow&nbsp;<a href="https://x.com/intent/follow?screen_name=Peersyst" target="_blank" rel="noopener noreferrer">Peersyst</a>&nbsp;on&nbsp;𝕏
          </div>
          <div>
            Join&nbsp;<a href="https://discord.gg/xrplevm" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
