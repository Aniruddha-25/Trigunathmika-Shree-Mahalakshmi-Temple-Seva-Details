import { useState } from 'react'
import type { TempleData } from '../data/englishSevaData'
import './PaymentPage.css'
import paymentQrCode from '../assets/img/payment-qr-code.jpg'

interface PaymentPageProps {
  data: TempleData
  onBack: () => void
}

function PaymentPage({ data, onBack }: PaymentPageProps) {
  const [copied, setCopied] = useState(false)

  const copyUpiId = async () => {
    await navigator.clipboard.writeText(data.payment.upiId)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="container payment-page">
      <div className="top-actions">
        <button type="button" className="lang-btn" onClick={onBack}>
          {data.labels.back}
        </button>
      </div>

      <div className="header-box">
        <h1>{data.payment.title}</h1>
        <p>{data.payment.subtitle}</p>
      </div>

      <section className="payment-card">
        <p className="payment-label">{data.payment.upiLabel}</p>
        <p className="payment-upi">{data.payment.upiId}</p>

        <button type="button" className="payment-btn copy-upi-btn" onClick={copyUpiId}>
          {copied ? 'Copied' : 'Copy UPI ID'}
        </button>

        <img className="payment-qr" src={paymentQrCode} alt={data.payment.qrAlt} />
      </section>
    </div>
  )
}

export default PaymentPage
