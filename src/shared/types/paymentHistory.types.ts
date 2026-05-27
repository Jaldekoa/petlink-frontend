export interface PaymentHistory {
    id: string
    sponsorshipId: string
    amount: number
    paymentMethod: string | null
    paymentReference: string | null
    paidAt: string | null
}

export interface CreatePaymentDTO {
    amount: number
    paymentMethod?: string
    paymentReference?: string
}