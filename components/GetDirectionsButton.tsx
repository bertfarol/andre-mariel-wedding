'use client';

export default function GetDirectionsButton() {
  const handleClick = () => {
    const destination = encodeURIComponent(
      'Balay Dako, Tagaytay - Nasugbu Hwy, Tagaytay City, 4120 Cavite'
    );

    
    // Deep link for mobile app
    const appUrl = `comgooglemaps://?daddr=${destination}`;
    // Web fallback
    const webUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    // Try to open the app first
    const now = Date.now();
    window.location.href = appUrl;

    // Fallback to browser if the app isn't installed (after ~1 sec)
    setTimeout(() => {
      if (Date.now() - now < 1500) {
        window.open(webUrl, '_blank', 'noopener,noreferrer');
      }
    }, 800);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="font-playfair font-semibold text-[15px] rounded-[6px] bg-black text-white h-[44px] w-full max-w-[288px] cursor-pointer hover:opacity-80 duration-300"
      >
        Get Directions
      </button>
    </div>
  );
}
