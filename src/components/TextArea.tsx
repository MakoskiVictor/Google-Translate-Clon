import { SectionType } from '@/types.d'
import { Form } from 'react-bootstrap'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px', resize: 'none' } as const

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Enter text'
  if (loading === true) return 'Translating...'
  return 'Translation'
}

export function TextArea ({ type, loading, value, onChange }: Props) {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
        <Form.Control
            as='textarea'
            placeholder={getPlaceholder({ type, loading })}
            autoFocus={type === SectionType.From}
            disabled={type === SectionType.To}
            style={styles}
            value={value}
            onChange={handleChange}
            />
  )
}
