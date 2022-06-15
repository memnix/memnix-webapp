export enum DeckStatus {
  Private = 1,
  InReview,
  Published,
}

export interface Deck {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: string | null
  deck_name: string
  deck_description: string
  deck_banner: string
  deck_status: DeckStatus
  deck_key: string
  deck_code: string
  deck_share: boolean
}

export interface DeckList extends Array<Deck> {}
