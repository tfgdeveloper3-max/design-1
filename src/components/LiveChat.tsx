import { useEffect } from "react";

const LICENSE_ID = 19067595;

export default function LiveChat() {
    useEffect(() => {
        window.__lc = window.__lc || {};
        window.__lc.license = LICENSE_ID;
        window.__lc.chat_between_groups = false;
        window.__lc.params = [
            {
                name: "Page",
                value: window.location.href,
            },
        ];

        const setupListeners = () => {
            if (!window.LiveChatWidget) return;

            window.LiveChatWidget.on("ready", () => {
                window.LiveChatWidget.call("maximize");
            });

            window.LiveChatWidget.on("new_event", (event) => {
                if (
                    ["message", "rich_message", "file"].includes(event.type) &&
                    event.author?.type !== "customer"
                ) {
                    window.LiveChatWidget.call("maximize");
                }
            });
        };

        if (window.LiveChatWidget) {
            setupListeners();
            return;
        }

        const previousAsyncInit = window.__lc.asyncInit;
        window.__lc.asyncInit = () => {
            if (previousAsyncInit) previousAsyncInit();
            setupListeners();
        };

        if (!document.getElementById("livechat-widget-script")) {
            const script = document.createElement("script");
            script.id = "livechat-widget-script";
            script.src = "https://cdn.livechatinc.com/tracking.js";
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            if (window.LiveChatWidget) {
                window.LiveChatWidget.off?.("ready");
                window.LiveChatWidget.off?.("new_event");
            }
        };
    }, []);

    return (
        <style>{`
      #chat-widget-container {
        right: 20px !important;
        z-index: 998 !important;
      }
    `}</style>
    );
}