import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LoginRegistrationInput } from './LoginRegistrationInput'

describe('Input', () => {
    const label="testInput"
    const placeholder="Your test Data"
    const errorMessage="Some error message"

  it('renders elems no error message', () => {
    const { getByText, getByPlaceholderText, debug } = render(
    <LoginRegistrationInput
        label={label}
        type="text"
        onChange=""
        placeholder={placeholder}
        displayError={false}
        errorMessage={errorMessage}
      />)

    expect(getByText(label)).toBeInTheDocument()
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument()
    expect(getByText(errorMessage)).toHaveClass("no-display")
  })

  it('renders elems with error message', () => {
    const { getByText, getByPlaceholderText, debug } = render(
    <LoginRegistrationInput
        label={label}
        type="text"
        onChange=""
        placeholder={placeholder}
        displayError={true}
        errorMessage={errorMessage}
      />)

    expect(getByText(label)).toBeInTheDocument()
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument()
    expect(getByText(errorMessage)).not.toHaveClass("no-display")
  })
})