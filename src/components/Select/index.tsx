import { useState, useRef, FC } from 'react'

import { useOutsideClick } from '~/hooks'

import { Container, BaseSelect, CustomSelectWrapper } from './styles'

type Item = {
  value: string
  label: string
}

type Props = {
  value?: string
  options: Item[]
  onChange(value: string): void
}

export const Select: FC<Props> = ({ options, onChange, value }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const selectRef = useRef(null)

  useOutsideClick(selectRef, () => {
    setOpen(false)
  })

  return (
    <Container isOpen={isOpen}>
      <BaseSelect>
        {options.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </BaseSelect>
      <CustomSelectWrapper
        ref={selectRef}
        onClick={() => {
          setOpen(prev => !prev)
        }}
      >
        <div className={`custom-select ${isOpen && 'open'}`}>
          <div className="custom-select__trigger">
            <span>{options.find(i => i.value === value)?.label}</span>
            <div className="arrow" />
          </div>
          <div className="custom-options">
            {options.map(item => (
              <div
                key={item.value}
                onClick={() => onChange(item.value)}
                className="option-container"
              >
                <span
                  className={`custom-option ${
                    value === item.value && 'selected'
                  } `}
                  data-value={item.value}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CustomSelectWrapper>
    </Container>
  )
}
