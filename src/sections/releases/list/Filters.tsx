import { Dispatch, SetStateAction } from 'react'

import { FaSearch } from 'react-icons/fa'
import { RiFilterOffLine } from 'react-icons/ri'

import { Select, SelectItem } from '~/components'
import { useTranslation } from '~/hooks'

import * as Styled from './styles'

type DateFilter = 'all' | 'available' | 'upcoming'

interface ReleasesFiltersProps {
  totalItems: number
  query: string
  onQueryChange: Dispatch<SetStateAction<string>>
  date: string
  onSelectDateChange: Dispatch<SetStateAction<DateFilter>>
  genre: string
  genreOptions: SelectItem[]
  onSelectGenreChange: (value: string) => void
  clearFilters: () => void
}

export const ReleasesFilters = (props: ReleasesFiltersProps) => {
  const {
    onQueryChange,
    onSelectDateChange,
    onSelectGenreChange,
    clearFilters,
    query,
    genre,
    genreOptions,
    totalItems,
    date
  } = props
  const { t } = useTranslation()
  return (
    <Styled.Filters>
      <Styled.SearchBox>
        <Styled.Input
          name="search"
          onChange={event => onQueryChange(event.target.value)}
          enterKeyHint="send"
          value={query}
          placeholder={t('releases_searchPlaceholder')}
        />
        <FaSearch size={16} color="#fff" style={{ marginRight: 16 }} />
      </Styled.SearchBox>

      <Select
        onChange={value => onSelectDateChange(value as DateFilter)}
        value={date}
        options={[
          { value: 'all', label: t('releases_all') },
          { value: 'available', label: t('releases_available') },
          { value: 'upcoming', label: t('releases_upcoming') }
        ]}
      />

      <Select
        onChange={onSelectGenreChange}
        value={genre}
        options={genreOptions}
      />

      <Styled.ClearFilters
        onClick={clearFilters}
        aria-label="clear-filters"
        title={t('clearFilters')}
      >
        <RiFilterOffLine size={22} color="#fff" />
      </Styled.ClearFilters>

      <Styled.ResultsCount>
        <strong>{totalItems}</strong> {t('releases_resultsFound')}
      </Styled.ResultsCount>
    </Styled.Filters>
  )
}
