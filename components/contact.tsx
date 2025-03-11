'use client';

import { Info, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '@/hooks/use-translations';
import { useLocation } from '@/contexts/location-context';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export function Contact() {
  const { t } = useTranslations();
  const { location, setLocation } = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    country: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Contact email sent successfully');
        setSuccessDialogOpen(true);
        setFormData({ name: '', company: '', phone: '', email: '', country: '', requirements: '' }); // Reset form
      } else {
        console.error('Failed to send contact email');
        setErrorDialogOpen(true);
      }
    } catch (error) {
      console.error('Error sending contact email:', error);
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
    <section id="contact" className="relative bg-gray-50 py-16">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
              {t('company.contact.tag')}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('company.contact.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('company.contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-2">
                  <a
                    href="tel:+905494300020"
                    className="flex items-center group p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f0f7] flex items-center justify-center text-[#0065A1]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{t('company.contact.whatsapp')}</p>
                      <p className="text-gray-600 hover:text-[#0065A1]">
                        +90 549 430 00 20
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:omer.yildiz@yilsa.com.tr"
                    className="flex items-center group p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f0f7] flex items-center justify-center text-[#0065A1]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{t('company.contact.email')}</p>
                      <p className="text-gray-600 hover:text-[#0065A1]">
                        omer.yildiz@yilsa.com.tr
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center p-4 rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f0f7] flex items-center justify-center text-[#0065A1]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{t('company.contact.locationLabel')}</p>
                      <p className="text-gray-600">{t('company.contact.locations.denizli')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 flex h-[250px] overflow-hidden">
                {/* Left section with vertical text */}
                <div className="w-12 bg-gray-100 flex items-center justify-center">
                  <span className="rotate-90 whitespace-nowrap text-[#0066a1] font-medium tracking-wider text-sm">
                    {t('company.contact.representative.label')}
                  </span>
                </div>
                {/* Right section with white background */}
                <div className="bg-white flex-grow p-6 flex flex-col">
                  <div className="flex justify-center gap-2 mb-4">
                  <button
                    className={`relative w-8 h-8 rounded-full overflow-hidden transition-transform hover:scale-110 ${location === 'uk' ? 'ring-2 ring-[#0065A1] ring-offset-2' : ''}`}
                    onClick={() => setLocation('uk')}
                  >
                    <img
                      src="/images/flags/uk.svg"
                      alt="UK flag"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button
                    className={`relative w-8 h-8 rounded-full overflow-hidden transition-transform hover:scale-110 ${location === 'tr' ? 'ring-2 ring-[#0065A1] ring-offset-2' : ''}`}
                    onClick={() => setLocation('tr')}
                  >
                    <img
                      src="/images/flags/tr.svg"
                      alt="Turkey flag"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button
                    className={`relative w-8 h-8 rounded-full overflow-hidden transition-transform hover:scale-110 ${location === 'in' ? 'ring-2 ring-[#0065A1] ring-offset-2' : ''}`}
                    onClick={() => setLocation('in')}
                  >
                    <img
                      src="/images/flags/in.svg"
                      alt="India flag"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  </div>
                  <div className="flex flex-col flex-grow">
                  {location === 'uk' && (
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('company.contact.uk.name')}</h3>
                      <p className="text-gray-600 mb-1.5">{t('company.contact.uk.location')}</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href="tel:+447585353603"
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group"
                        >
                          <Phone className="h-4 w-4 text-[#0065A1]" />
                          <span>+44 758 535 3603</span>
                        </a>
                        <a
                          href="mailto:ali.yildiz@yilsa.com.tr"
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group"
                        >
                          <Mail className="h-4 w-4 text-[#0065A1]" />
                          <span>ali.yildiz@yilsa.com.tr</span>
                        </a>
                      </div>
                    </div>
                  )}
                  {location === 'tr' && (
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('company.contact.tr.name')}</h3>
                      <p className="text-gray-600 mb-1.5">{t('company.contact.tr.location')}</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href="tel:+905494300020"
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group"
                        >
                          <Phone className="h-4 w-4 text-[#0065A1]" />
                          <span>+90 549 430 0020</span>
                        </a>
                        <a
                          href="mailto:omer.yildiz@yilsa.com.tr"
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group"
                        >
                          <Mail className="h-4 w-4 text-[#0065A1]" />
                          <span>omer.yildiz@yilsa.com.tr</span>
                        </a>
                      </div>
                    </div>
                  )}
                  {location === 'in' && (
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('company.contact.in.name')}</h3>
                      <p className="text-gray-600 mb-1.5">{t('company.contact.in.location')}</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href="tel:+919815232199"
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group"
                        >
                          <Phone className="h-4 w-4 text-[#0065A1]" />
                          <span>+91 981 523 2199</span>
                        </a>
                        <a
                          href="mailto:india.rep@yilsa.com.tr"
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group"
                        >
                          <Mail className="h-4 w-4 text-[#0065A1]" />
                          <span>india.rep@yilsa.com.tr</span>
                        </a>
                      </div>
                    </div>
                  )}
                    <div className="flex items-center justify-center gap-2 text-xs text-[#0065A1] mt-auto">
                      <Info className="h-3 w-3 flex-shrink-0" />
                      <p>{t('company.contact.representative.title')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('company.contact.form.contactPerson')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                      required
                      />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('company.contact.form.companyName')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                      />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('company.contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('company.contact.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('company.contact.form.country')}
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                  />
                </div>

                <div className="flex flex-col flex-grow mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('company.contact.form.message')}
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full h-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0065A1] text-white py-3 px-6 rounded-lg hover:bg-[#0065A1]/90 transition-colors font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('company.contact.form.submitLoading') : t('company.contact.form.submit')}
                </Button>
              </form>
              <AlertDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
                <AlertDialogContent>
                  <div className="flex justify-between">
                    <AlertDialogTitle>{t('components.contactDialog.successTitle')}</AlertDialogTitle>
                    <button
                      onClick={() => setSuccessDialogOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <AlertDialogDescription>
                    {t('components.contactDialog.successMessage')}
                  </AlertDialogDescription>
                  <div className="mt-6 flex justify-end">
                    <Button
                      onClick={() => setSuccessDialogOpen(false)}
                      className="px-4 py-2 rounded bg-[#0065A1] text-white hover:bg-[#1974aa]"
                    >
                      {t('components.contactDialog.okButton')}
                    </Button>
                  </div>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog open={errorDialogOpen} onOpenChange={setErrorDialogOpen}>
                <AlertDialogContent>
                  <div className="flex justify-between">
                    <AlertDialogTitle>{t('components.contactDialog.errorTitle')}</AlertDialogTitle>
                    <button
                      onClick={() => setErrorDialogOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <AlertDialogDescription className="text-red-500 font-bold">
                    {t('components.contactDialog.errorMessage')}
                  </AlertDialogDescription>
                  <div className="mt-6 flex justify-end">
                    <Button
                      onClick={() => setErrorDialogOpen(false)}
                      className="px-4 py-2 rounded bg-[#0065A1] text-white hover:bg-[#1974aa]"
                    >
                      {t('components.contactDialog.okButton')}
                    </Button>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
