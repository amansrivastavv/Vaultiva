// components/ui/dialog.jsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "../../lib/utils";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode.react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export const DialogContent = ({ children, className, roomId, ...props }) => {
  const [copied, setCopied] = useState(false);
  const [qrError, setQRError] = useState(null);
  const qrRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Room ID copied to clipboard!');
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error('Failed to copy room ID');
    }
  };

  const handleDownloadQR = async () => {
    try {
      const canvas = qrRef.current.querySelector("canvas");
      if (!canvas) {
        throw new Error("QR code not generated yet");
      }
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `vaultiva-room-${roomId}.png`;
      link.href = url;
      link.click();
      toast.success('QR code downloaded successfully!');
    } catch (error) {
      console.error("Download failed:", error);
      toast.error('Failed to download QR code');
    }
  };

  const handleShareQR = async () => {
    try {
      const canvas = qrRef.current.querySelector("canvas");
      if (!canvas) {
        throw new Error("QR code not generated yet");
      }
      
      const blob = await new Promise((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
        }, "image/png");
      });

      const file = new File([blob], `vaultiva-room-${roomId}.png`, {
        type: "image/png",
      });

      if (navigator.share) {
        await navigator.share({
          title: "Vaultiva Room QR",
          text: `Join my secure room on Vaultiva: ${roomId}`,
          files: [file],
        });
        toast.success('QR code shared successfully!');
      } else {
        toast.error('Web Share API not supported on this browser.');
      }
    } catch (error) {
      console.error("Share failed:", error);
      toast.error('Failed to share QR code');
    }
  };

  const handleShareText = async () => {
    try {
      const shareText = `Join my Vaultiva room: ${roomId}`;
      if (navigator.share) {
        await navigator.share({
          title: "Share Vaultiva Room",
          text: shareText,
          url: window.location.href
        });
        toast.success('Room ID shared successfully!');
      } else {
        toast.error('Sharing not supported in this browser.');
      }
    } catch (error) {
      console.error("Share failed:", error);
      toast.error('Failed to share room ID');
    }
  };

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300" />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 left-1/2 top-1/2 w-[95vw] sm:w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-900 border border-white/10 p-6 shadow-lg overflow-y-auto max-h-[90vh] transition-all duration-300",
          className
        )}
        {...props}
      >
        <div className="relative space-y-4">
          {children}

          {roomId && (
            <>
              <div>
                <label className="text-sm text-gray-400">Room ID</label>
                <div className="flex flex-col sm:flex-row items-stretch gap-2 mt-1">
                  <input
                    readOnly
                    value={roomId}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-white/10 text-white font-mono text-sm"
                  />
                  <button
                    onClick={handleCopy}
                    className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md"
                  >
                    {copied ? "Copied!" : "Copy Room ID"}
                  </button>
                  <button
                    onClick={handleShareText}
                    className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md"
                  >
                    Share Room ID
                  </button>
                </div>
              </div>

              <div className="text-center mt-6 space-y-3">
                <label className="text-sm text-gray-400">Room QR Code</label>
                <div ref={qrRef} className="inline-block p-2 bg-white rounded-md shadow-md">
                  <QRCode 
                    value={roomId} 
                    size={isMobile ? 120 : 160} 
                    level="H" 
                    includeMargin={true} 
                    renderAs="svg"
                    onError={(error) => setQRError(error)}
                  />
                  {qrError && (
                    <p className="text-red-400 text-sm mt-2">
                      Error generating QR code: {qrError.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={handleDownloadQR}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-all duration-200 hover:scale-105"
                  >
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download QR
                    </span>
                  </button>
                  <button
                    onClick={handleShareQR}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-all duration-200 hover:scale-105"
                  >
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share QR
                    </span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <DialogPrimitive.Close className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none">
          <XMarkIcon className="w-5 h-5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const DialogTitle = ({ children }) => (
  <h3 className="text-lg font-semibold text-white">{children}</h3>
);

export const DialogDescription = ({ children }) => (
  <p className="text-sm text-gray-400 mt-1">{children}</p>
);
