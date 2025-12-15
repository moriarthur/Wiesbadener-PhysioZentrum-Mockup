import qrCode from "../assets/qr_code.png";

export function Footer() {
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
            <img
              src={qrCode}
              alt="Telegram QR Code"
              className="w-16 h-16 object-contain"
            />
            <p className="text-neutral-400 text-sm">
              Developed by <br />
              <a href="https://t.me/twor9" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                Galart
              </a> <br />
              Demo version.
            </p>
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
              <img
                src={qrCode}
                alt="Telegram QR Code"
                className="w-16 h-16"
              />
              <p className="text-neutral-400 text-sm">
                Developed by<br />
                <a href="https://t.me/twor9" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">Galart</a> <br />
                Demo version.
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
