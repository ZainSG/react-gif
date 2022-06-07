import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas con el componente <GifGrid />', () => { 

    let category = 'Akame ga Kill'
    
    test('debe renderizar el componente', () => { 
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar items cuando se cargan', () => { 
        const gifs = [{
            id:'ABC',
            url: 'https://localhost/images/test.jpg',
            title:'this is title'
        },
        {
            id:'ABCD',
            url: 'https://localhost/images/test.jpg',
            title:'this is title'
        }
    ]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot()
        expect( wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)


    })


 })