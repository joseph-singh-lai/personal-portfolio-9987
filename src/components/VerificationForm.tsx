'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Loader, AlertCircle } from 'lucide-react'

interface VerificationResult {
  success: boolean
  verified: boolean
  message: string
  type: string
  timestamp: string
}

const VerificationForm = () => {
  const [verificationType, setVerificationType] = useState('user')
  const [verificationData, setVerificationData] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<VerificationResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const verificationTypes = [
    { value: 'email', label: 'Email', placeholder: 'Enter email address' },
    { value: 'phone', label: 'Phone', placeholder: 'Enter phone number' },
    { value: 'identity', label: 'Identity', placeholder: 'Enter identity data (JSON)' },
    { value: 'document', label: 'Document', placeholder: 'Enter document data (JSON)' },
    { value: 'contact', label: 'Contact', placeholder: 'Enter contact data (JSON)' },
    { value: 'user', label: 'User Credentials', placeholder: 'Enter user credentials (JSON)' }
  ]

  const handleVerification = async () => {
    if (!verificationData.trim()) {
      setError('Please enter verification data')
      return
    }

    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      let data = verificationData

      // Parse JSON for complex verification types
      if (['identity', 'document', 'contact', 'user'].includes(verificationType)) {
        try {
          data = JSON.parse(verificationData)
        } catch {
          setError('Invalid JSON format')
          setIsLoading(false)
          return
        }
      }

      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: verificationType,
          data: data
        })
      })

      const result = await response.json()

      if (response.ok) {
        setResult(result)
      } else {
        setError(result.error || 'Verification failed')
      }
    } catch {
      setError('Network error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const getResultIcon = () => {
    if (!result) return null
    
    if (result.verified) {
      return <CheckCircle className="text-green-500" size={24} />
    } else {
      return <XCircle className="text-red-500" size={24} />
    }
  }

  const getResultColor = () => {
    if (!result) return ''
    return result.verified ? 'text-green-600' : 'text-red-600'
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Verification API</h2>
      
      <div className="space-y-4">
        {/* Verification Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Verification Type
          </label>
          <select
            value={verificationType}
            onChange={(e) => setVerificationType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {verificationTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Data Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Verification Data
          </label>
          {verificationType === 'email' && (
            <input
              type="email"
              value={verificationData}
              onChange={(e) => setVerificationData(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          )}
          {verificationType === 'phone' && (
            <input
              type="tel"
              value={verificationData}
              onChange={(e) => setVerificationData(e.target.value)}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          )}
          {['identity', 'document', 'contact', 'user'].includes(verificationType) && (
            <textarea
              value={verificationData}
              onChange={(e) => setVerificationData(e.target.value)}
              placeholder={`Enter ${verificationType} data as JSON`}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            />
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          onClick={handleVerification}
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin" size={20} />
              Verifying...
            </>
          ) : (
            'Verify'
          )}
        </motion.button>

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
          >
            <AlertCircle size={20} />
            {error}
          </motion.div>
        )}

        {/* Result Display */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              {getResultIcon()}
              <span className={`font-semibold ${getResultColor()}`}>
                {result.verified ? 'Verified' : 'Not Verified'}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Type:</strong> {result.type}</p>
              <p><strong>Message:</strong> {result.message}</p>
              <p><strong>Timestamp:</strong> {new Date(result.timestamp).toLocaleString()}</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Example Data */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Example Data Formats:</h3>
        <div className="space-y-2 text-sm text-blue-800">
          <p><strong>Identity:</strong> {"{\"firstName\": \"John\", \"lastName\": \"Doe\", \"dateOfBirth\": \"1990-01-01\"}"}</p>
          <p><strong>Document:</strong> {"{\"type\": \"passport\", \"number\": \"A1234567\"}"}</p>
          <p><strong>Contact:</strong> {"{\"name\": \"John Doe\", \"email\": \"john@example.com\", \"message\": \"Hello world\"}"}</p>
          <p><strong>User:</strong> {"{\"userId\": \"IxqZ8jkQqShlz7eLBF1zGHCfPW83\", \"verificationCode\": \"PITCH-LOCAL-IXQZ8JKQ\"}"}</p>
        </div>
      </div>
    </div>
  )
}

export default VerificationForm
