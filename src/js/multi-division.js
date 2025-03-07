// іменований
export const countSum = (firstInput, secondInput) => 
    Number.parseFloat(firstInput.value) * Number.parseFloat(secondInput.value)

const countDivision = (firstInput, secondInput) => {
    if (secondInput.value !== 0) {
        return (
            Number.parseFloat(firstInput.value) /
            Number.parseFloat(secondInput.value)
        )
    } else {
        return "divisionByZero"
    }
}

// або
// іменований експорт кількох функцій export { countMulyi, countDivision}