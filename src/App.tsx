import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { useStore } from '@/hooks/useStore'
import { AUTO_LANGUAGE } from '@/constants'
import { ArrowIcon } from '@/components/Icons'
import { LanguageSelector } from '@/components/LanguageSelector'
import { SectionType } from '@/types.d'

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <LanguageSelector
          type={SectionType.From}
          value={fromLanguage}
          onChange={setFromLanguage}
          />
          {fromLanguage}
        </Col>

        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowIcon />
          </Button>
        </Col>

        <Col>
        <LanguageSelector
        type={SectionType.To}
        value={toLanguage}
        onChange={setToLanguage}
        />
        {toLanguage}
        </Col>
      </Row>

    </Container>
  )
}

export default App
