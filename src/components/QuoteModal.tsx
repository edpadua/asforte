import React from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = () => {
  // Form modal removed as requested; quote actions direct users straight to WhatsApp.
  return null;
};
