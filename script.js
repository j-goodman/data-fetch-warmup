async function getUniversityData (country) {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`)
    const universities = await response.json()

    testFunctions(universities)
}

const listUniversityNamesByProvince = (list, provinceName) => {
    return list.filter(university => {
        return university["state-province"] === provinceName
    }).map(university => university.name)
}

const summarizeUniversityByName = (list, universityName) => {
    // Takes in the name of a university and returns a string in the following format:
    // "McGill University is a school located in Quebec, Canada. Find out more about McGill University at http://www.mcgill.ca/."
    // Or, if there's no match, returns:
    // "Not found."
    const target = list.find(university => university.name.includes(universityName))

    return `${target.name} is a school located in ${target["state-province"]}, ${target.country}. Find out more about ${target.name} at ${target.web_pages}.`
}

const getProvinceWithMostUniversities = list => {
    // Returns the name of the province with the highest number of listed universities.
    counter = {}
    highestCount = 0
    provinceWithHighestCount = null

    list.forEach(university => {
        if (counter[university["state-province"]]) {
            counter[university["state-province"]] += 1
        } else {
            counter[university["state-province"]] = 1
        }
        if (counter[university["state-province"]] > highestCount) {
            highestCount = counter[university["state-province"]]
            provinceWithHighestCount = university["state-province"]
        }
    })

    return provinceWithHighestCount
}

getUniversityData("Canada")

const testFunctions = (universities) => {
    console.log(
        listUniversityNamesByProvince(universities, "Manitoba")
    )

    console.log(
        summarizeUniversityByName(universities, "Concordia")
    )

    console.log(
        getProvinceWithMostUniversities(universities)
    )
}