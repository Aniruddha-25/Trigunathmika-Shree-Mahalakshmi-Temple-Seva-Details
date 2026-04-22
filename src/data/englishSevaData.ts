export interface DailyScheduleRow {
  timeLabel: string
  schedule: string
}

export interface SevaRow {
  no: string
  seva: string
  price?: string
  className?: 'sub' | 'sub2'
  bold?: boolean
}

export interface SevaSection {
  title: string
  rows: SevaRow[]
}

export interface SpecialPoojaRow {
  no: string
  name: string
}

export interface TempleData {
  templeTitle: string
  address: string
  labels: {
    dailyTrikalaPooja: string
    time: string
    schedule: string
    no: string
    seva: string
    price: string
    specialPoojas: string
    specialPooja: string
    payment: string
    back: string
    templeLocation: string
    openInGoogleMaps: string
  }
  payment: {
    title: string
    subtitle: string
    upiLabel: string
    upiId: string
    qrAlt: string
    payNowLabel: string
    upiLink: string
    qrImagePath: string
  }
  dailyScheduleRows: DailyScheduleRow[]
  sevaSections: SevaSection[]
  specialPoojas: SpecialPoojaRow[]
}

export const englishTempleData: TempleData = {
  templeTitle: 'TRIGUNATHMIKA SHREE MAHALAKSHMI TEMPLE',
  address: 'Saraswathipuram, Bangalore - 560076',
  labels: {
    dailyTrikalaPooja: 'Daily Trikala Pooja',
    time: 'Time',
    schedule: 'Schedule',
    no: 'No',
    seva: 'Seva',
    price: 'Price (₹)',
    specialPoojas: 'Special Poojas',
    specialPooja: 'Special Pooja',
    payment: 'Payment',
    back: 'Back',
    templeLocation: 'Temple Location',
    openInGoogleMaps: 'Open in Google Maps',
  },
  payment: {
    title: 'Temple Payment',
    subtitle: 'Scan QR or use UPI ID for seva payment',
    upiLabel: 'UPI ID',
    upiId: '75514623788429@cnrb',
    qrAlt: 'UPI QR Code',
    payNowLabel: 'Make a Payment',
    upiLink: 'upi://pay?pa=75514623788429@cnrb&pn=Trigunathmika%20Temple&tn=Seva%20Payment',
    qrImagePath: '/img/payment-qr-code.jpg',
  },
  dailyScheduleRows: [
    { timeLabel: 'Morning', schedule: '07:30 - 08:00 AM' },
    { timeLabel: 'Noon', schedule: '12:00 - 12:30 PM' },
    { timeLabel: 'Evening', schedule: '07:30 - 08:00 PM' },
  ],
  sevaSections: [
    {
      title: 'Mahalakshmi Sannidhi',
      rows: [
        { no: '1', seva: 'Ksheerabhisheka', price: '200' },
        { no: '2', seva: 'Panchamrutha Abhisheka', price: '500' },
        { no: '3', seva: 'Bilvarchane (Monday)', price: '100' },
        { no: '4', seva: 'Karpoorarti', price: '20' },
        { no: '5', seva: 'Kumkumarchane', price: '50' },
        { no: '6', seva: 'Hannu Kayi Seva (with Hanu Kayi)', price: '150' },
        { no: '7', seva: 'Amavasye Pooja', price: '500' },
        { no: '8', seva: 'Hoovina Pooja', price: '2500' },
        { no: '9', seva: 'Aksharabhyasa Seva', price: '500' },
        { no: '10', seva: 'Seere Seva (Pure Silk / Cotton)', price: '250' },
        { no: '11', seva: 'Pure Gingelly Oil Seva (1 Week)', price: '1500' },
        { no: '12', seva: 'Prasada Seva', price: '2500' },
        { no: '13', seva: 'Rudrabhisheka (Monday)', price: '300' },
        { no: '14', seva: 'Udi Seva (Materials Separate)', price: '100' },
        { no: '15', seva: 'Alankara Seva', price: '5000' },
        { no: '16', seva: 'Shashwatha Pooja (Every Year 1 Day)', price: '5000' },
      ],
    },
    {
      title: 'Mahaganapathi Sannidhi',
      rows: [
        { no: '1', seva: 'Ksheerabhisheka', price: '150' },
        { no: '2', seva: 'Panchamrutha Abhisheka', price: '300' },
        { no: '3', seva: 'Durvarchane (Tuesday)', price: '50' },
        { no: '4', seva: 'Hoovina Pooja', price: '1000' },
        { no: '5', seva: 'Sankashti Pooja (Monthly)', bold: true },
        { no: '', seva: 'A) Ganahoma (10:00 AM)', className: 'sub' },
        { no: '', seva: '1) For Yajamana', price: '2500', className: 'sub2' },
        { no: '', seva: '2) Samuhika Seva', price: '250', className: 'sub2' },
        { no: '', seva: 'B) Samuhika Sankashti Pooja (05:30-07:30 PM)', price: '200', className: 'sub' },
        { no: '6', seva: 'Alankara Seva', price: '1500' },
        { no: '7', seva: 'Shashwatha Pooja (Every Year 1 Day)', price: '5000' },
      ],
    },
    {
      title: 'Subramanya Sahita Nagadeva Sannidhi',
      rows: [
        { no: '1', seva: 'Shukla Paksha Shashti (Monthly)', bold: true },
        { no: '', seva: 'A) Panchamrutha Abhisheka (10:00 AM)', price: '250', className: 'sub' },
        { no: '', seva: 'B) Hoovina Alankara', price: '1500', className: 'sub' },
        { no: '', seva: 'C) Prasada Seva', price: '1000', className: 'sub' },
      ],
    },
    {
      title: 'Other Poojas',
      rows: [
        { no: '1', seva: 'Sarva Seva (Trikala Pooja)', price: '1500' },
        { no: '2', seva: 'Satyanarayana Pooja (Poornima Day - 5:00 PM)', bold: true },
        { no: '', seva: 'A) For Yajamana', price: '3000', className: 'sub' },
        { no: '', seva: 'B) Samuhika Seva', price: '300', className: 'sub' },
        { no: '3', seva: 'Vehicle Pooja', bold: true },
        { no: '', seva: 'A) Two Wheeler', price: '100', className: 'sub' },
        { no: '', seva: 'B) Other Vehicles', price: '250', className: 'sub' },
      ],
    },
  ],
  specialPoojas: [
    { no: '1', name: 'Durga Namaskara' },
    { no: '2', name: 'Durga Homa' },
    { no: '3', name: 'Chandika Homa' },
    { no: '4', name: 'Ranga Pooja' },
    { no: '5', name: 'Shree Sooktha Pushpanjali' },
    { no: '6', name: 'Mruthyunjaya Homa' },
    { no: '7', name: 'Aashlesha Bali' },
    { no: '8', name: 'Atharva Sheersha Ganahoma' },
    { no: '9', name: 'Navagraha Shanti' },
    { no: '10', name: 'Pavamana Homa' },
  ],
}
