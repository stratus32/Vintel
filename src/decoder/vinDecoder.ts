import wmiMap from '../Vintel/src/data/wmi.json'
import countryMap from '../src/data/countries.json'
import yearMap from '../data/years.json'

export interface VINDecodeResult {
    raw: string
    country: string
    manufacturer: string
    year: number
    isValid: boolean
}

export function decodeVIN(vin: string): VINDecodeResult {

    // Validate vin length
    if (vin.length !== 17) {
        return { raw: vin, country: '', manufacturer: '', year: 0, isValid: false }
    }

    return {
        raw: vin,
        country: decodeCountry(vin[0]),
        manufacturer: decodeManufacturer(vin.slice(0, 3)),
        year: decodeYear(vin[9]),
        isValid: true
    }
}

function decodeCountry(char: string): string {

    // Return the country based on char value, if lookup returns nothing then unknown
    return countryMap[char] ?? 'Unknown'
}

function decodeManufacturer(wmi: string): string {

    // Return the manufacturer based on wmi value, if lookup returns nothing then unknown
    return wmiMap[wmi] ?? 'Unknown'
}

function decodeYear(char: string): number {

    return yearMap[char] ?? 0
}