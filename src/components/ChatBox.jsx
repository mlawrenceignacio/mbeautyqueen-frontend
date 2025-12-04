import { useEffect, useRef, useState } from "react";
import useUserStore from "../store/useUserStore";
import { IoSend } from "react-icons/io5";
import { isToday, isYesterday, format } from "date-fns";

import { getChatMessages, saveChatMessages } from "../utils/mockDB";

const FAQ_LIST = [
  {
    q: "What are your operating hours?",
    a: "We're open daily from 9:00 AM to 8:00 PM.",
  },
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended but walk-ins are welcome.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, GCash, and debit/credit cards.",
  },
  {
    q: "Do you offer home service?",
    a: "Yes — home service is available for select services.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Notify us 3 hours before your session to reschedule.",
  },
  {
    q: "Do you have parking?",
    a: "We have street parking and a private space beside the salon.",
  },
  { q: "How long is a facial session?", a: "Most facials take 45–75 minutes." },
  {
    q: "Do you use cruelty-free products?",
    a: "Yes — we use trusted cruelty-free brands.",
  },
  { q: "Are walk-ins charged extra?", a: "No extra charges for walk-ins." },
  {
    q: "Do you offer gift certificates?",
    a: "Yes — gift certificates are available.",
  },
];

function ts() {
  try {
    return new Date().toISOString();
  } catch {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

function formatDateSeparator(dateString) {
  const d = new Date(dateString);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "MMM d, yyyy");
}

export default function ChatBox() {
  const { user } = useUserStore();
  const uid = user ? user.id : "guest";
  const STORAGE_KEY = `chat_messages_${uid}`;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showFAQ, setShowFAQ] = useState(true);

  const listRef = useRef(null);
  const inputRef = useRef(null);

  /* LOAD only once */
  useEffect(() => {
    const stored = getChatMessages(uid);
    setMessages(Array.isArray(stored) ? stored : []);
  }, [uid]);

  /* SAVE whenever messages change */
  useEffect(() => {
    saveChatMessages(uid, messages);
  }, [messages, uid]);

  useEffect(() => {
    if (!user) {
      setMessages([]);
    }
  }, [user]);

  const sendUserMessage = (text) => {
    if (!user) return false;

    const userMsg = {
      id: Date.now(),
      senderId: uid,
      senderName: user.username || "You",
      role: "user",
      text,
      time: ts(),
    };

    setMessages((prev) => [...prev, userMsg]);
    return userMsg;
  };

  const sendBotReply = (u, reply) => {
    const botMsg = {
      id: Date.now() + 1,
      senderId: "salon_admin",
      senderName: "Salon Admin",
      role: "admin",
      text: reply,
      time: ts(),
      replyTo: u?.id ?? null,
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!user) {
      alert("Please log in to send messages.");
      return;
    }
    if (!input.trim()) return;

    const u = sendUserMessage(input.trim());
    setInput("");

    setTimeout(() => {
      sendBotReply(u, `Hi ${user.username || "there"}! We'll get back to you.`);
    }, 700);
  };

  const handleFAQClick = (faq) => {
    if (!user) {
      alert("Please log in first.");
      return;
    }
    const u = sendUserMessage(faq.q);
    setTimeout(() => sendBotReply(u, faq.a), 500);
  };

  const renderMessage = (m) => {
    const isMine = user && m.senderId === uid;

    return (
      <div
        key={m.id}
        className={`flex w-full ${
          isMine ? "justify-end" : "justify-start"
        } px-2`}
      >
        <div className="max-w-[65%] md:max-w-[55%] lg:max-w-[45%]">
          <div
            className={`text-xs mb-1 ${
              isMine ? "text-right text-gray-400" : "text-left text-red-900"
            }`}
          >
            {isMine ? "You" : m.senderName}
          </div>

          <div
            className={`px-4 py-2 text-sm rounded-2xl shadow-md break-words leading-relaxed ${
              isMine
                ? "bg-red-700 text-white rounded-br-sm"
                : "bg-white border border-red-200 text-red-900 rounded-bl-sm"
            }`}
          >
            {m.text}
          </div>

          <div
            className={`text-[10px] mt-1 ${
              isMine ? "text-right text-gray-400" : "text-left text-gray-500"
            }`}
          >
            {format(new Date(m.time), "p")}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
        {/* CHAT BOX */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden h-full md:flex-none md:w-[50%] ">
          {/* HEADER */}
          <div className="px-4 py-3 bg-red-900 text-white flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                💬
              </div>
              <div>
                <div className="font-semibold">Salon Chat Assistant</div>
                <div className="text-xs text-white/80">
                  We reply as soon as possible
                </div>
              </div>
            </div>
          </div>

          <div
            ref={listRef}
            className="p-3 space-y-3 bg-neutral-50 overflow-y-auto 
                       h-[35vh] sm:h-[60vh] md:h-[55vh]"
          >
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 text-sm mt-6">
                No messages yet. Try an FAQ or send a message.
              </div>
            ) : (
              messages.map((m, index) => {
                const prev = messages[index - 1];
                const showDate =
                  index === 0 ||
                  format(new Date(prev?.time), "yyyy-MM-dd") !==
                    format(new Date(m.time), "yyyy-MM-dd");

                return (
                  <div key={m.id}>
                    {showDate && (
                      <div className="text-center text-[11px] text-gray-500 my-4 font-medium">
                        {formatDateSeparator(m.time)}
                      </div>
                    )}
                    {renderMessage(m)}
                  </div>
                );
              })
            )}
          </div>

          {/* INPUT - MORE VISIBLE */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-3 px-4 py-3 border-t bg-white shadow-inner"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={!user}
              placeholder={user ? "Type a message…" : "Log in to send messages"}
              className="flex-1 px-3 py-2 text-sm border border-red-300 rounded-full
           bg-white font-medium
           focus:border-red-500 focus:ring-0 focus:outline-none
           shadow-sm"
            />

            <button
              className={`p-3 rounded-full shadow-md transition ${
                user
                  ? "bg-red-700 text-white hover:bg-red-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <IoSend size={18} />
            </button>
          </form>
        </div>

        {/* FAQ PANEL */}
        <div className="w-full md:w-[340px] lg:w-[450px]">
          <div className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden">
            <div className="px-4 py-3 bg-pink-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-red-900">Quick FAQ</div>
                <div className="text-xs text-red-800">
                  Tap a question to send it
                </div>
              </div>

              <button
                onClick={() => setShowFAQ((x) => !x)}
                className="text-sm px-3 py-1 border bg-white/70 rounded-md hover:bg-red-200"
              >
                {showFAQ ? "Hide" : "Show"}
              </button>
            </div>

            <div className="p-3 max-h-[360px] sm:max-h-[420px] md:max-h-[388px] overflow-y-auto">
              {showFAQ ? (
                <ul className="space-y-2">
                  {FAQ_LIST.map((f, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handleFAQClick(f)}
                        className="w-full text-left px-3 py-2 border bg-white rounded-lg text-sm text-red-900 hover:bg-red-50 transition"
                      >
                        {f.q}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 p-3">FAQ hidden</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
