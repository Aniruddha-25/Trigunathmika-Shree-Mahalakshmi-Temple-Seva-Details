import { useState } from 'react'
import './App.css'
import { englishTempleData } from './data/englishSevaData'
import { kannadaTempleData } from './data/kannadaSevaData'
import PaymentPage from './components/PaymentPage'
import mapsImage from './assets/img/maps.png'

type Language = 'en' | 'kn'
type ViewMode = 'seva' | 'payment'

function getLanguageToggleLabel(language: Language): string {
	return language === 'en' ? 'ಕನ್ನಡ' : 'English'
}

function formatPrice(price?: string): string {
	return price ?? ''
}

function App() {
	const [language, setLanguage] = useState<Language>('en')
	const [viewMode, setViewMode] = useState<ViewMode>('seva')

	const toggleLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'kn' : 'en'))
	}

	const data = language === 'en' ? englishTempleData : kannadaTempleData

	if (viewMode === 'payment') {
		return <PaymentPage data={data} onBack={() => setViewMode('seva')} />
	}

	return (
		<div className="container">
			<div className="top-actions">
				<button type="button" className="lang-btn" onClick={toggleLanguage}>
					{getLanguageToggleLabel(language)}
				</button>
				<button type="button" className="payment-btn" onClick={() => setViewMode('payment')}>
					{data.labels.payment}
				</button>
			</div>

			<div className="header-box">
				<h1>{data.templeTitle}</h1>
				<p>{data.address}</p>
			</div>

			<section>
				<h2>{data.labels.dailyTrikalaPooja}</h2>
				<table>
					<thead>
						<tr>
							<th>{data.labels.time}</th>
							<th>{data.labels.schedule}</th>
						</tr>
					</thead>
					<tbody>
						{data.dailyScheduleRows.map((row) => (
							<tr key={row.timeLabel}>
								<td>{row.timeLabel}</td>
								<td>{row.schedule}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			{data.sevaSections.map((section) => (
				<section key={section.title}>
					<h2>{section.title}</h2>
					<table className="rate-table">
						<thead>
							<tr>
								<th>{data.labels.no}</th>
								<th>{data.labels.seva}</th>
								<th>{data.labels.price}</th>
							</tr>
						</thead>
						<tbody>
							{section.rows.map((row, index) => (
								<tr key={`${section.title}-${index}`}>
									<td>{row.no}</td>
									<td className={row.className}>
										{row.bold ? <strong>{row.seva}</strong> : row.seva}
									</td>
									<td>{formatPrice(row.price)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			))}

			<section>
				<h2>{data.labels.specialPoojas}</h2>
				<table className="rate-table">
					<thead>
						<tr>
							<th>{data.labels.no}</th>
							<th>{data.labels.specialPooja}</th>
						</tr>
					</thead>
					<tbody>
						{data.specialPoojas.map((specialPooja) => (
							<tr key={specialPooja.no}>
								<td>{specialPooja.no}</td>
								<td>{specialPooja.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className="location-card">
				<p className="location-label">{data.labels.templeLocation}</p>
				<p className="location-address">{data.address}</p>
				<img
					className="location-map-image"
					src={mapsImage}
					alt={language === 'en' ? 'Temple location map' : 'ದೇವಸ್ಥಾನದ ಸ್ಥಳ ನಕ್ಷೆ'}
				/>
				<a
					className="map-btn location-map-btn"
					href="https://maps.app.goo.gl/gJYv6dA3ncVULfNc9"
					target="_blank"
					rel="noopener noreferrer"
				>
					{data.labels.openInGoogleMaps}
				</a>
			</section>
		</div>
	)
}

export default App
