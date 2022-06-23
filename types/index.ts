export enum DeckStatus {
  Private = 1,
  InReview,
  Published,
}

export enum LearningStage {
  StageNeverSeen = 0,
  StageToLearn,
  StageToRelearn,
  StageLearning,
  StageReviewing,
  StageKnown,
}

export interface TodayResponse {
  success: boolean
  data: {
    decks_responses: DeckResponseList
    count: number
  }
  message: string
  count: number
}

export interface HTTPResponse {
  success: boolean
  data: Object | Deck
  message: string
  count: number
}

export interface DeckResponseList extends Array<DeckResponse> {}

export interface DeckResponse {
  deck_id: number
  cards: CardResponseList
  count: number
}

export interface CardResponse {
  card: Card
  answers: Array<string>
  learning_stage: LearningStage
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

export interface CardResponseList extends Array<CardResponse> {}

export interface Card {
  ID: number
  card_answer: string
  card_case: boolean
  card_format: string
  card_image: string
  card_question: string
  card_type: number
  mcq: {
    Int32: number
    Valid: true
  }
}
