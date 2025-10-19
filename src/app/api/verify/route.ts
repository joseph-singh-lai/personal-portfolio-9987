import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, data } = body

    // Validate required fields
    if (!type || !data) {
      return NextResponse.json(
        { error: 'Type and data are required' },
        { status: 400 }
      )
    }

    let verificationResult

    switch (type) {
      case 'email':
        verificationResult = await verifyEmail(data)
        break
      case 'phone':
        verificationResult = await verifyPhone(data)
        break
      case 'identity':
        verificationResult = await verifyIdentity(data)
        break
      case 'document':
        verificationResult = await verifyDocument(data)
        break
      case 'contact':
        verificationResult = await verifyContact(data)
        break
      case 'user':
        verificationResult = await verifyUser(data)
        break
      default:
        return NextResponse.json(
          { error: 'Invalid verification type' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      success: true,
      type,
      verified: verificationResult.verified,
      message: verificationResult.message,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const data = searchParams.get('data')

  if (!type || !data) {
    return NextResponse.json(
      { error: 'Type and data parameters are required' },
      { status: 400 }
    )
  }

  try {
    let verificationResult

    switch (type) {
      case 'email':
        verificationResult = await verifyEmail(data)
        break
      case 'phone':
        verificationResult = await verifyPhone(data)
        break
      case 'identity':
        const identityData = JSON.parse(data)
        verificationResult = await verifyIdentity(identityData)
        break
      case 'document':
        const documentData = JSON.parse(data)
        verificationResult = await verifyDocument(documentData)
        break
      case 'contact':
        const contactData = JSON.parse(data)
        verificationResult = await verifyContact(contactData)
        break
      case 'user':
        const userData = JSON.parse(data)
        verificationResult = await verifyUser(userData)
        break
      default:
        return NextResponse.json(
          { error: 'Invalid verification type' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      success: true,
      type,
      verified: verificationResult.verified,
      message: verificationResult.message,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// User verification with your specific credentials
async function verifyUser(credentials: { userId: string; verificationCode: string }) {
  const { userId, verificationCode } = credentials
  
  // Your specific verification details
  const validUserId = 'IxqZ8jkQqShlz7eLBF1zGHCfPW83'
  const validVerificationCode = 'PITCH-LOCAL-IXQZ8JKQ'
  
  if (!userId || !verificationCode) {
    return {
      verified: false,
      message: 'User ID and verification code are required'
    }
  }
  
  const isUserIdValid = userId === validUserId
  const isCodeValid = verificationCode === validVerificationCode
  
  if (isUserIdValid && isCodeValid) {
    return {
      verified: true,
      message: 'User credentials verified successfully',
      userDetails: {
        userId: validUserId,
        verificationCode: validVerificationCode,
        status: 'verified',
        timestamp: new Date().toISOString()
      }
    }
  } else {
    return {
      verified: false,
      message: 'Invalid user credentials'
    }
  }
}

// Email verification
async function verifyEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isValid = emailRegex.test(email)
  
  return {
    verified: isValid,
    message: isValid ? 'Email format is valid' : 'Invalid email format'
  }
}

// Phone verification
async function verifyPhone(phone: string) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '')
  const isValid = phoneRegex.test(cleanPhone)
  
  return {
    verified: isValid,
    message: isValid ? 'Phone number format is valid' : 'Invalid phone number format'
  }
}

// Identity verification (basic format check)
async function verifyIdentity(identity: { firstName: string; lastName: string; dateOfBirth: string }) {
  const { firstName, lastName, dateOfBirth } = identity
  
  if (!firstName || !lastName || !dateOfBirth) {
    return {
      verified: false,
      message: 'Missing required identity fields'
    }
  }

  const nameRegex = /^[a-zA-Z\s]{2,50}$/
  const isValidName = nameRegex.test(firstName) && nameRegex.test(lastName)
  
  const dob = new Date(dateOfBirth)
  const isValidDOB = dob instanceof Date && !isNaN(dob.getTime())
  
  return {
    verified: isValidName && isValidDOB,
    message: (isValidName && isValidDOB) ? 'Identity information is valid' : 'Invalid identity information'
  }
}

// Document verification (basic format check)
async function verifyDocument(document: { type: string; number: string }) {
  const { type, number } = document
  
  if (!type || !number) {
    return {
      verified: false,
      message: 'Missing document type or number'
    }
  }

  const validTypes = ['passport', 'drivers_license', 'national_id', 'ssn']
  const isValidType = validTypes.includes(type.toLowerCase())
  
  const numberRegex = /^[a-zA-Z0-9]{5,20}$/
  const isValidNumber = numberRegex.test(number)
  
  return {
    verified: isValidType && isValidNumber,
    message: (isValidType && isValidNumber) ? 'Document information is valid' : 'Invalid document information'
  }
}

// Contact verification
async function verifyContact(contact: { name: string; email: string; message: string }) {
  const { name, email, message } = contact
  
  if (!name || !email || !message) {
    return {
      verified: false,
      message: 'Missing required contact fields'
    }
  }

  const nameRegex = /^[a-zA-Z\s]{2,100}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const messageRegex = /^.{10,1000}$/
  
  const isValidName = nameRegex.test(name)
  const isValidEmail = emailRegex.test(email)
  const isValidMessage = messageRegex.test(message)
  
  return {
    verified: isValidName && isValidEmail && isValidMessage,
    message: (isValidName && isValidEmail && isValidMessage) 
      ? 'Contact information is valid' 
      : 'Invalid contact information'
  }
}
