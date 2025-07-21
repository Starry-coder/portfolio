import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Terminal.css';

const Terminal = ({ isActive, onClose }) => {
  const navigate = useNavigate();
  const [command, setCommand] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  const commands = {
    help: {
      description: 'Show available commands',
      action: () => [
        'Available commands:',
        '  help          - Show this help message',
        '  ls            - List portfolio sections',
        '  about         - Navigate to About page',
        '  projects      - Navigate to Projects page', 
        '  resume        - Navigate to Resume page',
        '  skills        - Show technical skills',
        '  contact       - Show contact information',
        '  clear         - Clear terminal',
        '  whoami        - Display user info',
        '  date          - Show current date',
        '  exit          - Close terminal'
      ]
    },
    ls: {
      description: 'List portfolio sections',
      action: () => [
        'total 4',
        'drwxr-xr-x  2 aryan  staff   64 Jul 21 15:30 about/',
        'drwxr-xr-x  2 aryan  staff   64 Jul 21 15:30 projects/',
        'drwxr-xr-x  2 aryan  staff   64 Jul 21 15:30 resume/',
        '-rw-r--r--  1 aryan  staff 1024 Jul 21 15:30 README.md'
      ]
    },
    about: {
      description: 'Navigate to About page',
      action: () => {
        setTimeout(() => navigate('/about'), 1000);
        return ['Navigating to /about...', 'Loading personal information...'];
      }
    },
    projects: {
      description: 'Navigate to Projects page',
      action: () => {
        setTimeout(() => navigate('/projects'), 1000);
        return ['Navigating to /projects...', 'Loading project portfolio...'];
      }
    },
    resume: {
      description: 'Navigate to Resume page',
      action: () => {
        setTimeout(() => navigate('/resume'), 1000);
        return ['Navigating to /resume...', 'Loading CV and experience...'];
      }
    },
    skills: {
      description: 'Show technical skills',
      action: () => [
        'Technical Skills:',
        '├── Frontend: React, JavaScript, HTML5, CSS3',
        '├── Backend: Node.js, Express, MongoDB',
        '├── Security: Penetration Testing, OWASP',
        '├── Tools: Git, Docker, VS Code',
        '└── Other: Linux, Python, Bash'
      ]
    },
    contact: {
      description: 'Show contact information',
      action: () => [
        'Contact Information:',
        'Email: aryan.kumar@example.com',
        'LinkedIn: linkedin.com/in/aryan-kumar',
        'GitHub: github.com/aryan-kumar',
        'Location: Available for remote work'
      ]
    },
    whoami: {
      description: 'Display user info',
      action: () => [
        'aryan_kumar',
        'Role: Cybersecurity Enthusiast & Web Developer',
        'Status: Available for opportunities',
        'Passion: Building secure and innovative solutions'
      ]
    },
    date: {
      description: 'Show current date',
      action: () => [new Date().toString()]
    },
    clear: {
      description: 'Clear terminal',
      action: () => {
        setTerminalHistory([]);
        return [];
      }
    },
    exit: {
      description: 'Close terminal',
      action: () => {
        // Close terminal after a small delay to show the message
        setTimeout(() => {
          onClose();
        }, 500);
        return ['Terminal closed.'];
      }
    }
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();
    
    // Add command to history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === '') {
      setTerminalHistory(prev => [...prev, { 
        type: 'command', 
        content: `[${timestamp}] aryan@portfolio:~$ ` 
      }]);
      return;
    }

    // Add command to terminal display
    setTerminalHistory(prev => [...prev, { 
      type: 'command', 
      content: `[${timestamp}] aryan@portfolio:~$ ${cmd}` 
    }]);

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd].action();
      if (output.length > 0) {
        setTerminalHistory(prev => [...prev, { 
          type: 'output', 
          content: output 
        }]);
      }
    } else {
      setTerminalHistory(prev => [...prev, { 
        type: 'error', 
        content: [`Command not found: ${cmd}`, 'Type "help" for available commands.'] 
      }]);
    }

    setCommand('');
  };

  const handleKeyDown = (e) => {
    // Stop propagation to prevent the landing page Enter listener from firing
    e.stopPropagation();
    
    if (e.key === 'Enter') {
      executeCommand(command);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex === commandHistory.length - 1 ? -1 : historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(newIndex === -1 ? '' : commandHistory[newIndex]);
      }
    }
  };

  // Initialize terminal when activated
  useEffect(() => {
    if (isActive) {
      setTerminalHistory([
        { type: 'output', content: ['Terminal initialized successfully.', 'Type "help" for available commands.', ''] }
      ]);
      // Auto-focus with a small delay to ensure terminal is rendered
      const focusTimer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 200);
      
      return () => clearTimeout(focusTimer);
    }
  }, [isActive]);

  // Auto-focus terminal input when activated and keep focus
  useEffect(() => {
    if (isActive && inputRef.current) {
      const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };
      
      // Initial focus
      focusInput();
      
      // Re-focus if user clicks elsewhere
      const handleClick = (e) => {
        if (isActive && !e.target.closest('.terminal-container')) {
          focusInput();
        }
      };
      
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div 
      className="terminal-overlay"
      onKeyDown={(e) => e.stopPropagation()}
    >
      <div className="terminal-container" onKeyDown={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="terminal-dot red" onClick={onClose}></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
          </div>
          <span className="terminal-title">aryan@portfolio:~</span>
        </div>
      
      <div className="terminal-body">
        <div className="terminal-history">
          {terminalHistory.map((entry, index) => (
            <div key={index} className={`terminal-line ${entry.type}`}>
              {Array.isArray(entry.content) ? (
                entry.content.map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))
              ) : (
                <div>{entry.content}</div>
              )}
            </div>
          ))}
        </div>
        
        <div className="terminal-input-line">
          <span className="terminal-prompt">aryan@portfolio:~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="terminal-cursor"></span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Terminal;
