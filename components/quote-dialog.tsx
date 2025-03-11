'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type QuoteDialogProps = {
  children?: React.ReactNode;
};

export function QuoteDialog({ children }: QuoteDialogProps) {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setQuoteDialogOpen(false); // Close the quote dialog first
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSuccessDialogOpen(true); // Then show success dialog
      } else {
        console.error('Failed to send email');
        setErrorDialogOpen(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorDialogOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen}>
      {children || (
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="bg-[#0065A1] text-white hover:bg-[#1974aa] hover:text-white"
            onClick={() => setQuoteDialogOpen(true)}
          >
            {t('menu.getQuote')}
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('components.quoteDialog.title')}</DialogTitle>
          <p className="text-sm text-gray-600">
            {t('components.quoteDialog.description')}
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700"
            >
              {t('components.quoteDialog.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              {t('components.quoteDialog.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              {t('components.quoteDialog.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              {t('components.quoteDialog.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0065A1] text-white py-3 px-6 rounded-lg font-medium disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('components.quoteDialog.submitting') : t('components.quoteDialog.submit')}
          </button>
        </form>
      </DialogContent>
      <AlertDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <AlertDialogContent>
          <div className="flex justify-between">
            <AlertDialogTitle>{t('components.quoteDialog.successTitle')}</AlertDialogTitle>
            <button
              onClick={() => setSuccessDialogOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <AlertDialogDescription>
            {t('components.quoteDialog.successMessage')}
          </AlertDialogDescription>
          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => setSuccessDialogOpen(false)}
              className="px-4 py-2 rounded bg-[#0065A1] text-white hover:bg-[#1974aa]"
            >
              {t('components.quoteDialog.okButton')}
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={errorDialogOpen} onOpenChange={setErrorDialogOpen}>
        <AlertDialogContent>
          <div className="flex justify-between">
            <AlertDialogTitle>{t('components.quoteDialog.errorTitle')}</AlertDialogTitle>
            <button
              onClick={() => setErrorDialogOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
                  <AlertDialogDescription className="text-red-500 font-bold">
                    {t('components.quoteDialog.errorMessage')}
                  </AlertDialogDescription>
          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => setErrorDialogOpen(false)}
              className="px-4 py-2 rounded bg-[#0065A1] text-white hover:bg-[#1974aa]"
            >
              {t('components.quoteDialog.okButton')}
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </Dialog>
  );
}
