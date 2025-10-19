import VerificationForm from '@/components/VerificationForm'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Verification API
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test and interact with our verification API endpoints
            </p>
          </div>
          
          <VerificationForm />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">API Endpoints</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">POST /api/verify</code>
                  <p className="text-gray-600 mt-1">Verify data of various types</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">GET /api/verify</code>
                  <p className="text-gray-600 mt-1">Verify data via query parameters</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supported Types</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Email</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Identity</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Document</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Contact</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>User Credentials</span>
                  <span className="text-green-600">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
