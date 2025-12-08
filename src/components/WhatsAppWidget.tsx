import { useEffect, useRef, useState } from 'react';

type Msg = {
    id: number;
    sender: 'user' | 'bot';
    text: string;
    time?: string;
};

export default function WhatsAppWidget(): JSX.Element {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Msg[]>([
        { id: 1, sender: 'bot', text: 'Hola 👋 Soy VÍREMO Bot — ¿en qué puedo ayudarte hoy?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ]);
    const [typing, setTyping] = useState(false);
    const [, setUnread] = useState(0);
    const nextId = useRef(2);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const suggestions = [
        '¿Cuál es el precio para mi carga?',
        'Necesito cotización urgente',
        '¿Ofrecen transporte especializado?',
    ];

    useEffect(() => {
        if (open && scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, open]);

    // Auto-open behavior:
    // - Only auto-open once per browser session (sessionStorage 'wa_auto_open_done')
    // - If the user manually closed the widget previously, respect that (localStorage 'wa_user_closed')
    useEffect(() => {
        try {
            const userClosed = localStorage.getItem('wa_user_closed') === 'true';
            const autoOpened = sessionStorage.getItem('wa_auto_open_done') === 'true';
            if (!userClosed && !autoOpened) {
                const t = setTimeout(() => {
                    setOpen(true);
                    sessionStorage.setItem('wa_auto_open_done', 'true');
                }, 600);
                return () => clearTimeout(t);
            }
        } catch (err) {
            // if storage is not available, fallback to simple auto-open once
            const t = setTimeout(() => setOpen(true), 600);
            return () => clearTimeout(t);
        }
    }, []);

    // Mount/unmount panel to allow CSS open/close animation
    useEffect(() => {
        if (open) {
            setMounted(true);
            // reset unread when user opens
            setUnread(0);
            // focus input after panel opens
            setTimeout(() => {
                inputRef.current?.focus();
            }, 120);
        } else {
            const t = setTimeout(() => setMounted(false), 240); // wait for animation to finish
            return () => clearTimeout(t);
        }
    }, [open]);

    // Helper to close and remember user's preference
    function closeChat() {
        setOpen(false);
        try {
            localStorage.setItem('wa_user_closed', 'true');
        } catch (err) {
            // ignore storage errors
        }
    }

    function toggleOpenFromButton() {
        setOpen(prev => {
            const next = !prev;
            try {
                // if user manually opens, clear the 'closed' flag so they can still get auto-open next session
                localStorage.setItem('wa_user_closed', next ? 'false' : 'true');
            } catch (err) {
                // ignore
            }
            return next;
        });
    }

    function sendMessage(text: string) {
        if (!text.trim()) return;
        const id = nextId.current++;
        const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const userMsg: Msg = { id, sender: 'user', text, time: now };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate bot typing
        setTyping(true);
        setTimeout(() => {
            setTyping(false);
            const botId = nextId.current++;
            const reply: Msg = {
                id: botId,
                sender: 'bot',
                text: simulateBotReply(text),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => [...prev, reply]);
            // If panel is closed, increment unread counter
            if (!open) setUnread(u => u + 1);
        }, 900 + Math.random() * 900);
    }

    function simulateBotReply(userText: string) {
        const t = userText.toLowerCase();
        if (t.includes('precio') || t.includes('costo')) return 'Nuestros costos varían según alcance y volumen. ¿Quieres que te contacte un agente?';
        if (t.includes('servicio') || t.includes('servicios')) return 'Ofrecemos logística portuaria, transporte especializado y gestión aduanera. ¿Cuál te interesa?';
        if (t.includes('hola') || t.includes('buen')) return '¡Hola! ¿En qué puedo ayudarte hoy?';
        if (t.includes('gracias') || t.includes('ok')) return 'Con gusto — si necesitas más detalles, puedo agendar una llamada.';
        return 'Gracias por tu mensaje. Un agente te responderá pronto. ¿Deseas dejar tu correo o teléfono?';
    }

    return (
        <>
            {/* Floating button */}
            <div className="fixed bottom-5 right-5 z-50">
                <button
                    aria-label="Abrir chat de WhatsApp"
                    onClick={toggleOpenFromButton}
                    className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-gradient-to-br from-[#25D366] to-[#06A84A] text-white"
                >
                    {/* unread dot */}
                    <span
                        className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full ring-2 ring-white shadow-md animate-pulse"
                        aria-hidden
                    />
                    {/* WhatsApp icon */}
                    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
                        <path d="M20.52 3.48A11.78 11.78 0 0012 .25C5.73.25.75 5.23.75 11.5c0 2.05.54 4.05 1.56 5.8L.25 23.75l6.79-1.76A11.68 11.68 0 0012 23.25c6.27 0 11.25-4.98 11.25-11.25 0-3.01-1.17-5.8-2.73-7.52zM12 21c-1.7 0-3.36-.42-4.82-1.22l-.35-.2-4.03 1.05 1.08-3.93-.22-.36A8.95 8.95 0 013 11.5C3 6.26 7.26 2 12.5 2S22 6.26 22 11.5 17.74 21 12.5 21H12z" />
                        <path d="M17.32 14.02c-.29-.14-1.7-.84-1.97-.94-.27-.1-.47-.14-.67.14-.2.29-.77.94-.95 1.13-.18.19-.36.21-.66.07-.3-.14-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.6.14-.13.3-.36.44-.55.14-.19.19-.32.29-.53.1-.22.05-.41-.03-.57-.08-.15-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.36s-1 1-1 2.44 1.03 2.84 1.17 3.04c.14.2 2.02 3.08 4.9 4.32 2.3 1.03 2.98 1.02 3.24.96.26-.06.84-.33.96-.65.12-.32.12-.59.08-.65-.04-.06-.25-.1-.54-.24z" />
                    </svg>
                </button>
            </div>

            {/* Chat panel */}
            {mounted && (
                <div className="fixed bottom-20 right-5 z-50 w-80 sm:w-96">
                    <div
                        role="dialog"
                        aria-label="Chat de WhatsApp"
                        className={
                            `bg-white/95 shadow-xl rounded-lg overflow-hidden ring-1 ring-gray-100 transform transition-all duration-200 ` +
                            (open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none')
                        }
                    >
                        <div className="flex items-center justify-between px-4 py-3 bg-[#075E54] text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden ring-1 ring-white">
                                    <img src="/inicial.png" alt="VÍREMO" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-semibold">VÍREMO Bot</div>
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-[#25D366]" aria-hidden></span>
                                        <span className="text-xs">En línea</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={closeChat} aria-label="Cerrar chat" className="p-1 rounded-md hover:bg-white/10">
                                    ✕
                                </button>
                            </div>
                        </div>

                        <div ref={scrollRef} className="h-64 overflow-y-auto px-4 py-3 bg-gradient-to-b from-[#F3F7FA] to-white space-y-3">
                            {messages.map(m => (
                                <div key={m.id} className={m.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                                    <div className={
                                        (m.sender === 'user'
                                            ? 'bg-gradient-to-br from-[#DFF6D9] to-[#DCF8C6] text-sm px-3 py-2 rounded-lg max-w-[80%] text-black font-medium shadow-sm'
                                            : 'bg-white/95 border border-gray-200 text-sm px-3 py-2 rounded-lg shadow-sm max-w-[80%] text-black')
                                    }>
                                        <div>{m.text}</div>
                                        {m.time && <div className="text-[10px] text-gray-500 mt-1 text-right">{m.time}</div>}
                                    </div>
                                </div>
                            ))}

                            {typing && (
                                <div className="flex justify-start">
                                    <div className="bg-white text-sm px-3 py-2 rounded-lg shadow-sm flex items-center gap-2">
                                        <span className="text-black opacity-80">Escribiendo</span>
                                        <span className="flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                                            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse delay-75" />
                                            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse delay-150" />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Vertical suggestions above input */}
                        <div className="px-4 pt-2 bg-white">
                            <div className="flex flex-col gap-2">
                                {suggestions.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setInput(s)}
                                        className="w-full text-left px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-800 hover:bg-gray-50"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="px-3 py-2 border-t bg-white">
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    const text = input.trim();
                                    if (!text) return;
                                    // send message locally
                                    sendMessage(text);
                                    // open WhatsApp Web with the exact message in a new tab
                                    const waLink = `https://wa.me/?text=${encodeURIComponent(text)}`;
                                    try {
                                        window.open(waLink, '_blank');
                                    } catch (err) {
                                        // ignore if popup blocked
                                    }
                                }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    placeholder="Escribe un mensaje..."
                                    className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#25D366] text-black"
                                />
                                <button type="submit" className="bg-[#25D366] text-white px-3 py-2 rounded-md">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
