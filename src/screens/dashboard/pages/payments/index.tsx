import Header from './Header'
import Transactions from './Transactions'

export const paymentsDurationSelect = {
	today: 'Today',
	'last-week': 'Last Week',
	'last-month': 'Last Month',
	'last-year': 'Last Year',
	'all-time': 'All Time',
} as const

export const defaultKey_paymentsDurationSelect: keyof typeof paymentsDurationSelect = 'last-month'

export type KeyofPaymentsDurationSelect = keyof typeof paymentsDurationSelect

export default function Payments() {
	return (
		<>
			<Header />
			<Transactions />
		</>
	)
}
