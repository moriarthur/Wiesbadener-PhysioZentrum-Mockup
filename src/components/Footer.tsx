import qrCode from "../assets/qr_code.png";
import githubMark from "../assets/github-mark.svg";
import { useState } from 'react';

export function Footer() {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <footer className="bg-neutral-900 text-white py-8 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile layout - vertical stack */}
        <div className="block md:hidden space-y-6">
          {/* Copyright section */}
          <div className="text-center">
            <p className="text-neutral-400 text-sm">
              © 2025 Wiesbadener PhysioZentrum (Demo). All rights reserved. Fictitious address: Wilhelmstraße 45 · 65183 Wiesbaden · Tel: +49 611 1234567.
            </p>
          </div>

          {/* QR code and developer section */}
          <div className="flex items-center justify-center gap-4">
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setShowQrModal(true)}
            >
              <img
                src={qrCode}
                alt="Telegram QR Code"
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
            </div>
            <div className="text-neutral-400 text-sm">
              Developed by<br />
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <a href="https://github.com/moriarthur" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#d1d5db' }} onMouseOver={(e) => e.target.style.color = '#60a5fa'} onMouseOut={(e) => e.target.style.color = '#d1d5db'}>
                  Galart
                </a>
                <img src={githubMark} alt="GitHub" style={{ width: '18px', height: '18px', display: 'inline-block', filter: 'invert(100%) brightness(0.95)', pointerEvents: 'none', cursor: 'default' }} />
              </div>
              <br />
              Demo version.
            </div>
          </div>
        </div>

        {/* Desktop layout - horizontal */}
        <div className="hidden md:flex h-32 items-center justify-center">
          <div className="flex items-center">
            {/* Copyright section */}
            <div className="text-center" style={{ marginRight: '100px' }}>
              <p className="text-neutral-400 text-sm">
                © 2025 Wiesbadener PhysioZentrum (Demo). All rights reserved.<br />
                Fictitious address: Wilhelmstraße 45 · 65183 Wiesbaden · Tel: +49 611 1234567.
              </p>
            </div>

            {/* QR code and developer section */}
            <div className="flex flex-col items-center">
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => setShowQrModal(true)}
              >
                <img
                  src={qrCode}
                  alt="Telegram QR Code"
                  className="w-16 h-16"
                  loading="lazy"
                />
              </div>
              <div className="text-neutral-400 text-sm">
                Developed by<br />
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <a href="https://github.com/moriarthur" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#d1d5db' }} onMouseOver={(e) => e.target.style.color = '#60a5fa'} onMouseOut={(e) => e.target.style.color = '#d1d5db'}>
                    Galart
                  </a>
                  <img src={githubMark} alt="GitHub" style={{ width: '18px', height: '18px', display: 'inline-block', filter: 'invert(100%) brightness(0.95)', pointerEvents: 'none', cursor: 'default' }} />
                </div>
                <br />
                Demo version.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* QR Code Modal */}
      {showQrModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            padding: '1rem'
          }}
          onClick={() => setShowQrModal(false)}
        >
          <div
            style={{
              position: 'relative',
              backgroundColor: '#111827',
              borderRadius: '0.5rem',
              padding: '2rem',
              maxWidth: '24rem',
              width: '100%'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrModal(false)}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                color: '#d1d5db',
                fontSize: '1.875rem',
                fontWeight: '300',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '0.25rem'
              }}
            >
              ×
            </button>
            <img
              src={qrCode}
              alt="Telegram QR Code"
              style={{ width: '100%', height: 'auto' }}
            />
            <div style={{ textAlign: 'center', marginTop: '1rem', fontFamily: 'var(--font-sans)' }}>
              <span style={{ color: '#f2f2f2', fontSize: '0.875rem', fontWeight: '500' }}>Scan to connect on Telegram</span>
              <div style={{ color: '#9ca3af', fontSize: '0.75rem', margin: '0.25rem 0' }}>or</div>
              <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#f2f2f2', fontSize: '0.875rem', fontWeight: '500', fontFamily: 'var(--font-sans)' }}>
                  find me on
                </span>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.25rem' }}>
                  <a
                    href="https://github.com/moriarthur"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#f2f2f2',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-sans)'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#60a5fa'}
                    onMouseOut={(e) => e.target.style.color = '#f2f2f2'}
                  >
                    GitHub
                  </a>
                  <img
                    src={githubMark}
                    alt="GitHub"
                    style={{ width: '20px', height: '20px', filter: 'invert(100%) brightness(0.95)', cursor: 'default', display: 'inline-block', verticalAlign: 'bottom', transform: 'translateY(-3px)' }}
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}