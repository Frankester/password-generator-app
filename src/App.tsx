import { useState } from 'react'
import './App.css'
import { Button, Input, PasswordResult, RangeBar, Strength } from './components'
import { dafalt_pasword, error_result } from './utils/constants'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PasswordSettingsType, schemePasswordSettings } from './models'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { generatePassword } from './services'

function App() {
  const [passwordResult, setPasswordResult] = useState("")
  const { control, handleSubmit } = useForm<PasswordSettingsType>({
    resolver: zodResolver(schemePasswordSettings),
    defaultValues: {
      length: '0',
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false
    }
  })
  const [lengthCharacters, setLengthCharacters] = useState(0)

  const genreatePasswordSubmit: SubmitHandler<PasswordSettingsType> = (optionsPassword) => {

    generatePassword(optionsPassword)
      .then(data => {
        setPasswordResult(data.password)
      })
      .catch(() => { setPasswordResult(error_result) })
    console.log(optionsPassword)
  }

  return (
    <main className='main'>
      <h1 className='title'>Password Generator</h1>

      <PasswordResult placeholder={dafalt_pasword} result={passwordResult} />

      <form onSubmit={handleSubmit(genreatePasswordSubmit)} className='form-options'>
        <RangeBar control={control} lenght={lengthCharacters} changeLength={setLengthCharacters} />
        <section className="other-options-wrapper">
          <Input type='checkbox' control={control} name='uppercase' className='checkbox' label={<>Include Uppercase Letters</>} />
          <Input type='checkbox' control={control} name='lowercase' className='checkbox' label={<>Include Lowercase Letters</>} />
          <Input type='checkbox' control={control} name='numbers' className='checkbox' label={<>Include Numbers</>} />
          <Input type='checkbox' control={control} name='symbols' className='checkbox' label={<>Include Symbols</>} />
        </section>

        <section className='strength-wrapper'>
          <small>STRENGTH</small>
          <Strength password={passwordResult} />
        </section>

        <Button type="submit" disabled={lengthCharacters === 0}>
          Generate <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </form>
    </main>
  )
}

export default App
