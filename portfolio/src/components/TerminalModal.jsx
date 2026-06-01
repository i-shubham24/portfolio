import { useState, useEffect, useRef } from 'react';

export default function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to SS_OS v1.0.0' },
    { type: 'system', text: 'Type "help" for a list of available commands.' }
  ]);
  const inputRef = useRef(null);

  // Listen for CMD+K or CTRL+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';

      switch (cmd) {
        case 'help':
          response = 'Available commands: whoami, skills, clear, hire';
          break;
        case 'whoami':
          response = 'Shubhampreet Singh. AI Engineer & Full Stack Dev.';
          break;
        case 'skills':
          response = 'React, Node.js, Python, YOLOv8, MERN Stack, Tailwind CSS.';
          break;
        case 'hire':
          response = 'Initializing email protocol...';
          setTimeout(() => window.open('mailto:shubhamkaler24@gmail.com'), 1000);
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          response = '';
          break;
        default:
          response = `Command not found: ${cmd}. Type "help" for options.`;
      }

      setHistory([...history, { type: 'user', text: `user@ss-os:~$ ${input}` }, { type: 'system', text: response }]);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
      <div 
        className="w-full max-w-2xl bg-gray-900/90 border border-gray-700 rounded-lg shadow-2xl overflow-hidden font-mono text-sm"
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing it
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setIsOpen(false)}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-gray-400 text-xs">shubhampreet — bash</div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-80 overflow-y-auto text-gray-300">
          {history.map((line, i) => (
            <div key={i} className={`mb-1 ${line.type === 'user' ? 'text-violet-400' : 'text-emerald-400'}`}>
              {line.text}
            </div>
          ))}
          <div className="flex mt-2">
            <span className="text-violet-400 mr-2">user@ss-os:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none text-gray-100"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}