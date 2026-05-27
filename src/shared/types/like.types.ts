export interface Like {
    userId: string
    animalId: string
    createdAt: string
    animal: {
        id: string
        name: string
        species: string
        breed: string | null
        status: string | null
        images: {
            id: string
            imageUrl: string
            isMain: boolean | null
        }[]
    }
}

export interface ToggleLikeResponse {
    liked: boolean
}