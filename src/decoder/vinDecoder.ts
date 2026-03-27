import wmiMap from '../data/wmi.json' with { type: 'json' }
import countryMap from '../data/countries.json' with { type: 'json' }
import yearMap from '../data/years.json' with { type: 'json' }

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
        country: decodeCountry(vin.charAt(0)),
        manufacturer: decodeManufacturer(vin.slice(0, 3)),
        year: decodeYear(vin.charAt(9)),
        isValid: true
    }
}

function decodeCountry(char: string): string {
    const map = countryMap as Record<string, string>
    return map[char] ?? 'Unknown'
}

function decodeManufacturer(wmi: string): string {
    const map = wmiMap as Record<string, string>
    return map[wmi] ?? 'Unknown'
}

function decodeYear(char: string): number {
    const map = yearMap as Record<string, number>
    return map[char] ?? 0
}