import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Home from '../mock/home';

jest.mock('react-redux');

const mockDispatch = jest.fn();

beforeAll(() => {
  reactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
});

describe('Test for Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the Home Page', async () => {
    const countries = [
      {
        name: 'Afghanistan',
        topLevelDomain: ['.af'],
        alpha2Code: 'AF',
        alpha3Code: 'AFG',
        callingCodes: ['93'],
        capital: 'Kabul',
        altSpellings: ['AF', 'Afġānistān'],
        subregion: 'Southern Asia',
        region: 'Asia',
        population: 40218234,
        latlng: [33.0, 65.0],
        demonym: 'Afghan',
        area: 652230.0,
        timezones: ['UTC+04:30'],
        borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
        nativeName: 'افغانستان',
        numericCode: '004',
        flags: {
          svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
          png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
        },
        currencies: [
          {
            code: 'AFN',
            name: 'Afghan afghani',
            symbol: '؋',
          },
        ],
        languages: [
          {
            iso639_1: 'ps',
            iso639_2: 'pus',
            name: 'Pashto',
            nativeName: 'پښتو',
          },
          {
            iso639_1: 'uz',
            iso639_2: 'uzb',
            name: 'Uzbek',
            nativeName: 'Oʻzbek',
          },
          {
            iso639_1: 'tk',
            iso639_2: 'tuk',
            name: 'Turkmen',
            nativeName: 'Türkmen',
          },
        ],
        translations: {
          br: 'Afghanistan',
          pt: 'Afeganistão',
          nl: 'Afghanistan',
          hr: 'Afganistan',
          fa: 'افغانستان',
          de: 'Afghanistan',
          es: 'Afganistán',
          fr: 'Afghanistan',
          ja: 'アフガニスタン',
          it: 'Afghanistan',
          hu: 'Afganisztán',
        },
        flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
        regionalBlocs: [
          {
            acronym: 'SAARC',
            name: 'South Asian Association for Regional Cooperation',
          },
        ],
        cioc: 'AFG',
        independent: true,
      },
      {
        name: 'Åland Islands',
        topLevelDomain: ['.ax'],
        alpha2Code: 'AX',
        alpha3Code: 'ALA',
        callingCodes: ['358'],
        capital: 'Mariehamn',
        altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
        subregion: 'Northern Europe',
        region: 'Europe',
        population: 28875,
        latlng: [60.116667, 19.9],
        demonym: 'Ålandish',
        area: 1580.0,
        timezones: ['UTC+02:00'],
        nativeName: 'Åland',
        numericCode: '248',
        flags: {
          svg: 'https://flagcdn.com/ax.svg',
          png: 'https://flagcdn.com/w320/ax.png',
        },
        currencies: [
          {
            code: 'EUR',
            name: 'Euro',
            symbol: '€',
          },
        ],
        languages: [
          {
            iso639_1: 'sv',
            iso639_2: 'swe',
            name: 'Swedish',
            nativeName: 'svenska',
          },
        ],
        translations: {
          br: 'Åland',
          pt: 'Ilhas de Aland',
          nl: 'Ålandeilanden',
          hr: 'Ålandski otoci',
          fa: 'جزایر الند',
          de: 'Åland',
          es: 'Alandia',
          fr: 'Åland',
          ja: 'オーランド諸島',
          it: 'Isole Aland',
          hu: 'Åland-szigetek',
        },
        flag: 'https://flagcdn.com/ax.svg',
        regionalBlocs: [
          {
            acronym: 'EU',
            name: 'European Union',
          },
        ],
        independent: false,
      },
    ];

    const tree = render(<Home countries={countries} />);
    expect(tree).toMatchSnapshot();
  });
});
