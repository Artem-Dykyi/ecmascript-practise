

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
   