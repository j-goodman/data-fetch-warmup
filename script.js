async function getUniversityData (country) {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`)
    const universities = await response.json()

    testFunctions(universities)
}

const listUniversityNamesByProvince = (list, provinceName) => {
    // Returns a list of the names of all the listen universities in the given province.
}

const summarizeUniversityByName = (list, universityName) => {
    // Takes in the name of a university and returns a string in the following format:
    // "McGill University is a school located in Quebec, Canada. Find out more about McGill University at http://www.mcgill.ca/."
    // Or, if there's no match, returns:
    // "Not found."
}

const getProvinceWithMostUniversities = list => {
    // Returns the name of the province with the highest number of listed universities.
}

getUniversityData("Canada")

const testFunctions = (universities) => {
    console.log(
        listUniversityNamesByProvince(universities, "Manitoba")
    )

    console.log(
        summarizeUniversityByName(universities, universityName)
    )

    console.log(
        getProvinceWithMostUniversities(universities)
    )
}