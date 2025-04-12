"use client"
import { useState } from 'react';
import { FiSend, FiCheck, FiAlertTriangle, FiArrowRight } from 'react-icons/fi';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="relative py-28 bg-black text-white" id="contact">
      {/* Full-width CONTACT header with perfect spacing */}
      <div className="w-full border-t border-b border-gray-800 py-20 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center uppercase">
            CONTACT
          </h2>
          <p className="text-lg md:text-xl text-gray-400 text-center mt-6 max-w-xl mx-auto leading-relaxed">
            Get in touch to discuss your project requirements and how we can collaborate.
          </p>
        </div>
      </div>

      {/* Form container with optimized spacing */}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 bg-gray-900 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 bg-gray-900 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-gray-500"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Describe your project..."
                rows={5}
                className="w-full px-5 py-3.5 bg-gray-900 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-gray-500"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <select
                  name="budget"
                  className="w-full px-5 py-3.5 bg-gray-900 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2E3ZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1.25rem] text-gray-300"
                  required
                >
                  <option value="" disabled selected className="text-gray-500">Project Budget</option>
                  <option value="$1K-$5K">$1K - $5K</option>
                  <option value="$5K-$10K">$5K - $10K</option>
                  <option value="$10K+">$10K+</option>
                </select>
              </div>
              <div>
                <select
                  name="service"
                  className="w-full px-5 py-3.5 bg-gray-900 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2E3ZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1.25rem] text-gray-300"
                  required
                >
                  <option value="" disabled selected className="text-gray-500">Service Needed</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-medium transition-all duration-300 group ${
                status === 'sending'
                  ? 'bg-blue-600/80 cursor-not-allowed'
                  : status === 'sent'
                  ? 'bg-green-600'
                  : status === 'error'
                  ? 'bg-red-600'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {status === 'idle' ? (
                <>
                  <span>Submit Inquiry</span>
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              ) : status === 'sending' ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : status === 'sent' ? (
                <>
                  <FiCheck className="mr-2" />
                  Message Sent
                </>
              ) : (
                <>
                  <FiAlertTriangle className="mr-2" />
                  Send Failed
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}