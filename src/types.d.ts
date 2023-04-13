import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from '@/constants'

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE', payload: Language }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }

// keyof typeof => el tipo es una de las keys del objeto supported_languages
export type Language = keyof typeof SUPPORTED_LANGUAGES

export type AutoLanguage = typeof AUTO_LANGUAGE

export type FromLanguage = Language | AutoLanguage

export type Props =
 | { type: SectionType.From, value: FromLanguage, onChange: (language: Language) => void }
 | { type: SectionType.To, value: ToLanguage, onChange: (language: Language) => void }

export enum SectionType {
  From = 'from',
  To = 'to'
}
