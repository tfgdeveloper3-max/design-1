import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cta from './components/Cta'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Trustsection from './components/Trustsection'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { LiveChatWidget } from "@livechat/widget-react";
import StickyContactBar from './components/Stickycontactbar'

function App() {

  useEffect(() => {
    const openChat = () => {
      const livechat = (window as any).LiveChatWidget;

      if (livechat) {
        setTimeout(() => {
          livechat.call("maximize");
        }, 1000);
        livechat.on("new_event", (event: any) => {
          if (
            ["message", "rich_message", "file"].includes(event.type) &&
            event.author?.type !== "customer"
          ) {
            livechat.call("maximize");
          }
        });
      }
    };

    if ((window as any).LiveChatWidget) {
      openChat();
    }

    (window as any).__lc = (window as any).__lc || {};
    (window as any).__lc.asyncInit = () => {
      openChat();
    };
  }, []);

  return (
    <>
      <LiveChatWidget license="19067595" />
      <div className="app">
        <Hero>
          <Navbar />
        </Hero>
        <About />
        <Cta />
        <Pricing />
        <Services />
        <Portfolio />
        <Trustsection />
        <Footer />
      </div>

      <StickyContactBar />
    </>
  )
}

export default App