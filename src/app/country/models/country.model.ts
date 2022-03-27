
export interface Country {
    code: number
    name: string
    native: string
    phone: string
    continent: Continent
    capital: string
    currency: string
    languages: Language[]
    emoji: string
    emojiU: string
    states: State[]
}
  
export interface Continent {
    code: number
    name: string
    countries: Country[]
}
  
export interface Language {
    code: number
    name: string
    native: string
    countries: Country[]
}
  
export interface State {
    code: string
    name: string
    country: Country
}