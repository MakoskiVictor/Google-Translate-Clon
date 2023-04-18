import { type FromLanguage, type Language } from '@/types'
import { API_URL } from '@/constants'

export async function translate ({ fromLanguage, toLanguage, text }:
{ fromLanguage: FromLanguage, toLanguage: Language, text: string }): Promise<string> {
  try {
    const translation = await fetch(`${API_URL}/translate`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify({ fromLanguage, toLanguage, text }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const result = translation.json()

    return await result
  } catch (error) {
    console.error('Error:', error)
    return 'Límite de pedidos alcanzado / Order limit reached'
  }
}
