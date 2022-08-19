export enum DeckStatus {
  Private = 1,
  InReview,
  Published,
}

export enum CarouselType {
  Today = 0,
  ToPlay,
  ToSubscribe,
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

export interface TrainingCards {
  Answers: string[]
  Card: Card
  learning_stage: LearningStage
}

export interface SubDeck {
  Deck: Deck
  Owner: object
  card_count: number
  deck_id: number
  owner_id: number
  permission: number
  settings_today: boolean
}

export interface SubDeckList extends Array<SubDeck> {}

export interface TrainingCardsList extends Array<TrainingCards> {}

export interface HTTPResponse {
  success: boolean
  data:
    | Record<string, unknown>
    | Deck
    | TrainingCardsList
    | SubDeckList
    | DeckEditorList
    | CardList
    | McqList
    | any
  message: string
  count: number
}

export interface DeckEditorList extends Array<DeckEditor> {}

export interface DeckEditor {
  deck_id: number
  permission: number
  card_count: number
  Deck: Deck
}

export interface DeckResponseList extends Array<DeckResponse> {}

export interface DeckResponse {
  deck_id: number
  cards: CardResponseList
  count: number
}

export interface CardResponse {
  Card: Card
  Answers: Array<string>
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

export interface CardList extends Array<Card> {}

export interface Card {
  ID: number
  card_answer: string
  card_case: boolean
  card_format: string
  card_image: string
  card_question: string
  card_type: number
  card_spaces: boolean
  mcq_id: {
    Int32: number
    Valid: true
  }
}

export interface Mcq {
  ID: number
  mcq_answer: string
  mcq_name: string
  mcq_type: number
  deck_id: number
}

export interface McqList extends Array<Mcq> {}

export interface User {
  ID: number
  email: string
  user_avatar: string
  user_name: string
  user_bio: string
  user_permissions: number
}
