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
    title: "Explorers",
    logos: [
      "axelarscan.png",
      "blockscout.png",
      "forbole_bigd 1.png",
      "range.png",
      "exploreme.png",
      "bonynode.png",
      "corenode.png",
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
    title: "Oracles",
    logos: ["bandprotocol.png"],
  },
  {
    title: "Indexers",
    logos: ["goldsky.png"],
  },
  {
    title: "dApps",
    logos: [
      "capsign.png",
      "easya.png",
      "elys-logo-white-medium-size 1.png",
      "fomobiz.png",
      "gas.zip.png",
      "hammyfinance.png",
      "injective.png",
      "mars.png",
      "moai.png",
      "moremarkets.png",
      "nexusdao.png",
      "nexusdapp.png",
      "nfts2me.png",
      "onchaingm.png",
      "purplemarkets.png",
      "riddle.png",
      "securd.png",
      "skuuy.png",
      "strobe.png",
      "vertex.png",
      "walkit.png",
      "xrise33.png",
      "xrplnames.png",
      "zns.png",
    ],
  },
  {
    title: "Validators",
    logos: [
      "bkgeomatics.png",
      "blockscout.png",
      "cosmostation.png",
      "cryptosurvivor.png",
      "cumulo.png",
      "enigma.png",
      "flowdesk.png",
      "grove.png",
      "imperator.png",
      "informalsystems.png",
      "interchainlabs.png",
      "keplr.png",
      "kingnodes.png",
      "kintsugi.png",
      "linkpool.png",
      "moai.png",
      "nexus.png",
      "peersyst.png",
      "polkachu.png",
      "purplemarkets.png",
      "rhino.png",
      "ripple.png",
      "sg1.png",
      "xrplcommons.png",
      "xtoadz.png"
    ],
  },
  {
    title: "Providers",
    logos: [
      "blockitize.png",
      "bonynode.png",
      "brightlystake.png",
      "corenode.png",
      "cosmonaut.png",
      "cosmostation.png",
      "cumulo.png",
      "dongqn.png",
      "enigma.png",
      "grove.png",
      "imperator.png",
      "itrocket.png",
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
  {
    title: "Bridges",
    logos: [
      "axelar.png",
      "ibc.png",
      "skip.png",
      "squid.png",
    ],
  },
  {
    title: "Core",
    logos: [
      "axelar.png",
      "commonprefix.png",
      "cosmos.png",
      "peersyst.png",
      "ripple.png",
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
      "nccgroup.png",
    ],
  },
  {
    title: "Wallets",
    logos: [
      "cosmostation.png",
      "crossmark.png",
      "keplr.png",
      "leap.png",
      "metamask.png",
      "palmerafinance.png",
      "xrplmetamasksnap.png"
    ],
  },
];

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <div>
          <a href="https://airtable.com/appDFL9N9MDWj0Ywd/shrl5nsqAhtghUN8I" target="_blank" rel="noopener noreferrer">Submit your project!</a>
        </div>
        <div style={{marginTop: 8}}>
          Follow <a href="https://x.com/Peersyst" target="_blank" rel="noopener noreferrer">Peersyst</a> on 𝕏
        </div>
      </footer>
    </div>
  );
}

export default App;
