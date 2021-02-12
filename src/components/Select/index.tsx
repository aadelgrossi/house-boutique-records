import { useState, useRef, FC, useCallback } from 'react'

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
  const [selected, setSelected] = useState(value)
  const selectRef = useRef(null)

  useOutsideClick(selectRef, () => {
    setOpen(false)
  })

  const handleClick = useCallback(
    (item: Item) => {
      onChange(item.value)
      setSelected(item.value)
    },
    [onChange]
  )

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
            <span>
              {options.find(item => item.value === selected)?.label || 'Select'}
            </span>
            <div className="arrow" />
          </div>
          <div className="custom-options">
            {options.map(item => (
              <div
                key={item.value}
                onClick={() => handleClick(item)}
                className="option-container"
              >
                <span
                  className={`custom-option ${
                    selected === item.value && 'selected'
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
