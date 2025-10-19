'use client'

export default function DarkModeTest() {
  const handleManualToggle = () => {
    document.documentElement.classList.toggle('dark');
    console.log('Manual toggle - HTML classes:', document.documentElement.className);
    console.log('Has dark class:', document.documentElement.classList.contains('dark'));
    console.log('Body background:', window.getComputedStyle(document.body).backgroundColor);
  }

  return (
    <div className="py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-center">
      <p className="text-lg">Dark mode test - This should change color when you toggle!</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Check browser console for debug logs showing HTML classes
      </p>
      <button 
        onClick={handleManualToggle}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Manual Toggle Test
      </button>
    </div>
  )
}
