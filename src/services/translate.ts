import { type FromLanguage, type Language } from '@/types'

export async function translate ({ fromLanguage, toLanguage, text }:
{ fromLanguage: FromLanguage, toLanguage: Language, text: string }): Promise<string> {
  try {
    const translation = await fetch('localhost3000/translate', {
      method: 'GET',
      body: JSON.stringify({ fromLanguage, toLanguage, text }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async res => await res.json())
    return translation
  } catch (error) {
    console.error('Error:', error)
    return 'Límite de pedidos alcanzado / Order limit reached'
  }
}
