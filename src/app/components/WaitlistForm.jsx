export default function WaitlistForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input 
        type="email" 
        placeholder="Enter your .edu email" 
        className="px-4 py-3 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#24C27A] focus:border-transparent"
        style={{ width: '100%', maxWidth: '420px' }} 
        required
      />
      <button 
        type="submit" 
        className="btn-primary whitespace-nowrap"
        style={{ borderRadius: '8px' }}
      >
        Join waitlist
      </button>
      <p className="text-xs text-gray-500 mt-1 sm:mt-0 sm:absolute sm:mt-12">No spam—just launch updates.</p>
    </form>
  );
} 