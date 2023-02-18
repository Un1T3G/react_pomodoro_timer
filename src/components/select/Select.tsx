import { useEffect, useState } from 'react'
import { cn } from '../../utils/css'
import './Select.scss'

interface ISelectOption<T> {
  value: T
  label: string
}

interface IProps<T> {
  defaultValue: T
  options: ISelectOption<T>[]
  onChanged?: (value: T) => void
}

const Select = <T,>({ defaultValue, options, onChanged }: IProps<T>) => {
  const [isOpened, setIsOpened] = useState(false)

  const [selectedItem, setSelectedItem] = useState(
    options[options.findIndex((e) => e.value === defaultValue)]
  )

  const toggleIsOpened = () => {
    setIsOpened((prev) => !prev)
  }

  const onChangeHandler = (index: number) => {
    setSelectedItem(options[index])

    if (onChanged) {
      onChanged(options[index].value)
    }

    setIsOpened(true)
  }

  useEffect(() => {
    if (isOpened) {
      return
    }

    setSelectedItem(options[options.findIndex((e) => e.value === defaultValue)])
  }, [isOpened, defaultValue])

  return (
    <button onClick={toggleIsOpened} className="select">
      <span className={cn('select__text', isOpened ? 'active' : undefined)}>
        {selectedItem.label}
      </span>
      {isOpened ? (
        <ul className={cn('select__list')}>
          {options.map((e, i) => (
            <li
              onClick={() => onChangeHandler(i)}
              key={e.label}
              className={cn(
                'select__item',
                e.value === selectedItem.value ? 'active' : undefined
              )}
            >
              {e.label}
            </li>
          ))}
        </ul>
      ) : undefined}
    </button>
  )
}

export default Select
