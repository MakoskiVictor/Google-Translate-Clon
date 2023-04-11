import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Button, Stack } from 'react-bootstrap'
import { useStore } from '@/hooks/useStore'
import { AUTO_LANGUAGE } from '@/constants'
import { ArrowIcon, CopyIcon } from '@/components/Icons'
import { LanguageSelector } from '@/components/LanguageSelector'
import { SectionType } from '@/types.d'
import { TextArea } from '@/components/TextArea'
import { useEffect } from 'react'
import { translate } from '@/services/translate'
import { useDebounce } from '@/hooks/useDebounce'

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    loading
  } = useStore()

  const debounceFromText = useDebounce(fromText)

  useEffect(() => {
    if (debounceFromText === '') return
    translate({ fromLanguage, toLanguage, text: debounceFromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Límite de pedidos alcanzado / Order limit reached') })
  }, [debounceFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  return (
    <Container fluid>
      <h2>Google Translate</h2>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
            />
            <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto' >
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowIcon />
          </Button>
        </Col>

        <Col>
        <Stack gap={2}>
        <LanguageSelector
        type={SectionType.To}
        value={toLanguage}
        onChange={setToLanguage}
        />
          <div style={{ position: 'relative' }} >
            <TextArea
                type={SectionType.To}
                value={result}
                onChange={setResult}
                loading={loading}
                />
                <Button
                  variant='link'
                  style={{ position: 'absolute', left: 0, bottom: 0 }}
                  onClick={handleClipboard}
                >
                  <CopyIcon />
                </Button>
          </div>
            </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
