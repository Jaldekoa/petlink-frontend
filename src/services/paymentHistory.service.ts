import { apiClient } from "@/shared/lib/apiClient"
import type { CreatePaymentDTO, PaymentHistory } from "@/shared/types/paymentHistory.types"


export const getPaymentsBySponsorship = (sponsorshipId: string) =>
    apiClient.get<PaymentHistory[]>(`/payment-history/sponsorship/${sponsorshipId}`)

export const createPayment = (sponsorshipId: string, data: CreatePaymentDTO) =>
    apiClient.post<PaymentHistory>(`/payment-history/sponsorship/${sponsorshipId}`, data)

export const getPaymentById = (id: string) =>
    apiClient.get<PaymentHistory>(`/payment-history/${id}`)