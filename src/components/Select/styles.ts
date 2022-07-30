import styled, { css } from 'styled-components'

export const baseInput = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 56px;
  padding: 0 1rem;
  color: ${props => props.theme.colors.white};
`

export const BaseSelect = styled.select`
  display: none;
`

export const CustomSelectWrapper = styled.div`
  font-family: Yantramanav;
  font-size: 16px;
  position: relative;
  user-select: none;
`

export const Container = styled.div<{ isOpen: boolean }>`
  .custom-select {
    ${baseInput}
    padding-right: 8px;
    background: ${props => props.theme.colors.black};
    position: relative;
    cursor: pointer;
    color: ${props => props.theme.colors.white};
    border-bottom: 1px solid gray;
  }
  .custom-select__trigger {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .custom-options {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.black};
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
    max-height: 200px;
    overflow-y: auto;
  }

  .custom-select.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  .custom-option {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
    color: ${props => props.theme.colors.ice};

    padding: 0 1rem;
    width: 100%;

    height: 100%;
  }

  .option-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 56px;
    width: 100%;
  }

  .arrow {
    position: relative;
    height: 7.72px;
    width: 12.26px;
  }

  .arrow:before,
  .arrow:after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }

  .arrow:before {
    left: -2px;
    transform: rotate(-45deg);
    background-color: ${props => props.theme.colors.ice};
  }
  .arrow:after {
    left: 2px;
    transform: rotate(45deg);
    background-color: ${props => props.theme.colors.ice};
  }

  .open .arrow::before {
    left: -2px;
    transform: rotate(45deg);
  }

  .open .arrow::after {
    left: 2px;
    transform: rotate(-45deg);
  }

  .option-container:hover {
    .custom-option {
      cursor: pointer;
      background-color: ${props => props.theme.colors.secondaryLight};
    }
  }

  .custom-option.selected {
    color: ${props => props.theme.colors.ice};
    background-color: ${props => props.theme.colors.primary};
  }
`
