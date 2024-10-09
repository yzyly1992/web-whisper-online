export default function Privacy() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-cyan-100 flex flex-col">
      {/* Privacy Policy Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <p className="text-gray-700 mb-4">
            At Web Whisper, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and protection of your data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Collection of Personal Data</h2>
          
          <p className="text-gray-700 mb-4">
            We want to assure you that Web Whisper does not collect, store, or process any personal data. Our Chrome extension is designed to function without the need for any personal information from our users.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How Web Whisper Works</h2>
          
          <p className="text-gray-700 mb-4">
            Web Whisper operates entirely within your browser. When you use our extension to convert a webpage to audio:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>The content is processed locally on your device.</li>
            <li>No data is sent to our servers or any third-party services.</li>
            <li>We do not track your browsing history or the pages you convert.</li>
            <li>We do not use cookies or any other tracking technologies.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@webwhisper.online" className="text-slate-600">info@webwhisper.online</a>
          </p>

          <p className="text-gray-700 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>
    </div>
  )
}