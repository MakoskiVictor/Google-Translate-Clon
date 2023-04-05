import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Button, Stack } from 'react-bootstrap'
import { useStore } from '@/hooks/useStore'
import { AUTO_LANGUAGE } from '@/constants'
import { ArrowIcon } from '@/components/Icons'
import { LanguageSelector } from '@/components/LanguageSelector'
import { SectionType } from '@/types.d'
import { TextArea } from '@/components/TextArea'

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
        <TextArea
            type={SectionType.To}
            value={result}
            onChange={setResult}
            loading={loading}
            />
            </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
