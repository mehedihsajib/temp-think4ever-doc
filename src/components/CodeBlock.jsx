import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlock = ({ code, language = 'bash', customClass = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`code-block-wrapper ${customClass}`}>
      <div className="code-block-header">
        <div className="code-block-header-left">
          <div className="code-block-dots">
            <span className="code-block-dot dot-red"></span>
            <span className="code-block-dot dot-yellow"></span>
            <span className="code-block-dot dot-green"></span>
          </div>
          <span className="code-block-lang">{language.toUpperCase()}</span>
        </div>
        <button className="code-block-copy-btn" onClick={handleCopy}>
          <i className={copied ? "fa-solid fa-check" : "fa-regular fa-copy"}></i> {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        useInlineStyles={false}
        customStyle={{
          margin: 0,
          background: 'transparent',
          padding: '1rem',
          fontSize: '14px',
        }}
        wrapLongLines={true}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
