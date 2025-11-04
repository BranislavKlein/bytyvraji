import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase, type ContactInquiry } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState<ContactInquiry>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-stone-800 mb-4 sm:mb-6 tracking-wide">Kontakt</h2>
        <div className="h-1 w-20 sm:w-24 bg-amber-600 mx-auto mb-8 sm:mb-12"></div>
        <p className="text-center text-stone-600 mb-8 sm:mb-12 text-base sm:text-lg font-light px-4">
          Máte otázky? Radi vám poskytneme viac informácií
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <div className="bg-stone-50 border border-stone-200 p-6 sm:p-8 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-light text-stone-900 mb-4 sm:mb-6">Kontaktné informácie</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-light text-stone-900 mb-1">Adresa</h4>
                    <p className="text-sm sm:text-base text-stone-600 font-light">
                      Námestie svätého Egídia 95<br />
                      058 01 Poprad
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-light text-stone-900 mb-1">Telefón</h4>
                    <a href="tel:+421948527246" className="text-sm sm:text-base text-stone-600 font-light hover:text-amber-600 transition-colors">
                      +421 948 527 246
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-light text-stone-900 mb-1">Email</h4>
                    <a href="mailto:michaela.schutz@centrumreal.sk" className="text-sm sm:text-base text-stone-600 font-light hover:text-amber-600 transition-colors break-all">
                      michaela.schutz@centrumreal.sk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-light text-stone-900 mb-3 sm:mb-4">Kancelária</h3>
              <p className="text-sm sm:text-base text-stone-600 mb-3 sm:mb-4 font-light">
                Pondelok - Piatok: 9:00 - 17:00<br />
                Sobota: 10:00 - 14:00<br />
                Nedeľa: Zatvorené
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-light text-stone-900 mb-2">
                  Meno a priezvisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-stone-300 bg-white focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition font-light"
                  placeholder="Vaše meno"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-light text-stone-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-stone-300 bg-white focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition font-light"
                  placeholder="vas@email.sk"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-light text-stone-900 mb-2">
                  Telefón
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-stone-300 bg-white focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition font-light"
                  placeholder="+421"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-light text-stone-900 mb-2">
                  Správa *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-stone-300 bg-white focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition resize-none font-light"
                  placeholder="Vaša správa..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200">
                  <p className="text-green-800 text-sm font-light">
                    Ďakujeme za vašu správu! Čoskoro vás budeme kontaktovať.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200">
                  <p className="text-red-800 text-sm font-light">
                    Nastala chyba pri odosielaní správy. Skúste to prosím znova.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-stone-800 text-white py-3 sm:py-4 px-6 text-sm sm:text-base font-light hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 tracking-wide"
              >
                {isSubmitting ? (
                  'Odosielam...'
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Odoslať správu
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
